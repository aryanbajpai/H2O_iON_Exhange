import { clientRel, drinkingWater, industrialPumps, mission, strength, turnkey } from "../assets";

export const quickLinks = [
  {
    title: 'Quick Links',
    links: [
      { link: 'Water Treatment Plants' },
      { link: 'Seawater Desalination System' },
      { link: 'Demineralization System' },
      { link: 'Waste Water Recycling Plants' },
      { link: 'Ionexchange Resin' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { link: 'Industrial Reverse Osmosis System' },
      { link: 'MIneral Water System' },
      { link: 'Water Softing System' },
      { link: 'Water Treatment Components' },
      { link: 'Swimming Filtration System' },
    ],
  },
];

export const aboutH2O = [
    {
      title: 'Our Strength',
      para: 'One of Strongest water management company in western India. We have largest manufacturing facality.',
      img: strength,
    },
    {
      title: 'Mission',
      para: '“We relentlessly endeavour to provide an ultimate engineered solution to meet customer needs for water and waste water treatment.”',
      img: mission,
    },
];

export const services = [
  {
      id: 1,
      img: clientRel,
      title: "CLIENTS RELATIONSHIP",
      para: "Annual maintenance contract for systems supplied by us..",
  },
  {
      id: 2,
      img: turnkey,
      title: "TRUNKEY PROJECT",
      para: "Water softing plant for hardwater for applications like industry,.. ",
  },
  {
      id: 3,
      img: industrialPumps,
      title: "INDUSTRIAL PUMPS",
      para: "Waterboy stainless steel industrial pumps used in Dairy Processing,..",
  },
  {
      id: 4,
      img: drinkingWater,
      title: "DRINKING WATER FILTERATION",
      para: "Drinking water filteration system with & without UV for homes, school, colleges, ..",
  },
];