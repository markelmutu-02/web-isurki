import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const BATTERY_BUCKET_COLORS = {
  'Crítica (<10%)': '#d32f2f',
  'Baja (10-30%)': '#ed6c02',
  'Buena (>30%)': '#2e7d32',
  'Sin datos': '#757575',
};

/**
 * Distribución de batería de la flota.
 *
 * Recibe el snapshot de dispositivos que ya calcula IsurlogMap (battery,
 * status...) vía su prop `onDataChange` — este componente no hace ninguna
 * petición propia, solo agrupa lo que ya se ha calculado.
 *
 * La batería y la conectividad se tratan como datos independientes: un
 * isurlog offline puede tener guardada su última batería conocida (a veces
 * es justo el motivo de que dejara de transmitir), así que se clasifica por
 * nivel de batería igual que uno online, no se descarta por estar offline.
 *
 * NOTA sobre la leyenda: cuando <Legend> es hijo de <PieChart>, Recharts
 * ignora cualquier `payload` que se le pase a mano y lo sobrescribe con uno
 * generado internamente a partir de los datos del Pie — y esa generación
 * automática reordena alfabéticamente. Por eso aquí NO se usa <Legend> de
 * recharts: se pinta una leyenda propia debajo del gráfico, iterando
 * directamente sobre chartData, así el orden es 100% nuestro.
 *
 * @param {{ data: Array<{ battery?: number }> }} props
 */
export default function BatteryDistributionChart({ data }) {
  let buenaCount = 0;
  let bajaCount = 0;
  let criticaCount = 0;
  let sinDatosCount = 0;

  (data || []).forEach((d) => {
    if (typeof d.battery !== 'number') { sinDatosCount += 1; return; }
    if (d.battery < 10) criticaCount += 1;
    else if (d.battery <= 30) bajaCount += 1;
    else buenaCount += 1;
  });

  const chartData = [
    { name: 'Buena (>30%)', value: buenaCount },
    { name: 'Baja (10-30%)', value: bajaCount },
    { name: 'Crítica (<10%)', value: criticaCount },
    { name: 'Sin datos', value: sinDatosCount },
  ];

  const total = chartData.reduce((sum, d) => sum + d.value, 0);

  if (!total) {
    return (
      <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Todavía no hay datos de batería para mostrar.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={64}
              outerRadius={104}
              paddingAngle={2}
              startAngle={90}
              endAngle={-270}
            >
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={BATTERY_BUCKET_COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Leyenda propia, no la de Recharts: ver nota arriba */}
      <Stack
        direction="row"
        spacing={2.5}
        rowGap={0.75}
        justifyContent="center"
        flexWrap="wrap"
        sx={{ mt: 1.5 }}
      >
        {chartData.map((entry) => (
          <Stack key={entry.name} direction="row" spacing={0.75} alignItems="center">
            <Box sx={{
              width: 10, height: 10, borderRadius: 0.5, flexShrink: 0,
              bgcolor: BATTERY_BUCKET_COLORS[entry.name],
            }} />
            <Typography variant="caption" color="text.secondary">
              {entry.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
