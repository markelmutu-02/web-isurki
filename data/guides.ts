export interface GuidePost {
  id: number;
  slug: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  category: string;
  title: string;
  description: string;
  date: { day: string; month: string; year: string };
}

export const guides: GuidePost[] = [
  {
    id: 2,
    slug: "lora-vs-nb-iot",
    imgSrc: "/image/section/img-details-service-1.jpg",
    imgWidth: 850,
    imgHeight: 512,
    category: "Guía",
    title: "NB-IoT vs LoRa vs satélite: guía para elegir la conectividad de tu proyecto IoT",
    description:
      "Diferencias entre NB-IoT, LoRa/LoRaWAN, satélite (NB-IoT-NTN) y WiFi para un proyecto IoT industrial, y cómo elegir la opción correcta según el emplazamiento",
    date: {
      day: "24",
      month: "SEP",
      year: "2026",
    },
  },
  {
    id: 1,
    slug: "que-es-un-datalogger-iot",
    imgSrc: "/image/blog/isurlog-news.jpg",
    imgWidth: 400,
    imgHeight: 300,
    category: "Guía",
    title: "¿Qué es un datalogger IoT y para qué sirve en la industria?",
    description:
      "Qué es exactamente un datalogger, en qué se diferencia uno IoT de uno tradicional, para qué se usa en la industria y qué tener en cuenta al elegir uno",
    date: {
      day: "23",
      month: "SEP",
      year: "2026",
    },
  },
];
