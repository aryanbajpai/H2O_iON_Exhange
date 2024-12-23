import { clientRel, drinkingWater, hpp, industrialPumps, mission, pbs, sds, spfs, strength, turnkey, wtc, wtp } from "../assets";

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

export const ourPrdt = [
  { id: 1, text: 'WATER TREATMENT PLANTS', img: wtp },
  { id: 2, text: 'WATER TREATMENT COMPONENTS', img: wtc },
  { id: 3, text: 'SWIMMING POOL FILTRATION SYSTEM', img: spfs },
  { id: 4, text: 'HYDRO PNEAMATIC PRESSURE', img: hpp },
  { id: 5, text: 'PRESSURE BOOSTER SYSTEM', img: pbs },
  { id: 6, text: 'SEA WATER DESALINATION SYSTEM', img: sds },
];