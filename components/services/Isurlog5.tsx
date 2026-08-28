import React from "react";

export default function Specifications() {
  return (
    <>
      <h4 className="title-content mb-16">Especificaciones</h4>

      <h5 className="mb-16">Entradas/Salidas (E/S) integradas para sensores/detectores externos</h5>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "32px" }}>
        <tbody>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              Alimentación a sensores 9-24V 1A (regulable por software) + 5V/0.5A.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              4 Entradas 4-20mA, activo/pasivo, con un fusible de protección de reset automático.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              1 Entrada digital, contacto libre de potencial.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              1 Entrada RS485, hasta 32 sensores + conector QWIIC para sensores I2C.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              1 Entrada para sensores PT100 de 2, 3 o 4 hilos.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              3 Salidas digitales a relé de estado sólido: 1×2A + 2×0,4A.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}>
              3 GPIOs que pueden funcionar como entradas o salidas.
            </td>
          </tr>
        </tbody>
      </table>

      <h5 className="mb-16">Módulo de ampliación de E/S</h5>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              Modbus RTU.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              4× entradas analógicas 4/20 mA, bucles activos o pasivos.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              2× entradas digitales de estado + 2 entradas digitales de contaje.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              Control todo/nada y proporcional de válvulas hidráulicas automáticas (reguladoras de presión y caudal con electroválvulas latch).
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}>
              Medición de la temperatura y humedad relativa interior.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
