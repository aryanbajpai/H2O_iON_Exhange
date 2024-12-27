import { clientRel, drinkingWater, hpp, industrialPumps, latestPrjct1, latestPrjct2, mission, pbs, sds, spfs, strength, turnkey, wtc, wtp } from "../assets";

export const menuItems = [
  {
    item: "HOME",
    link: '/',
  },
  {
    item: "ABOUT US",
    link: '/about-us',
  },
  {
    item: "PRODUCTS",
    link: '/',
  },
  {
    item: "SERVICES",
    link: '/services',
  },
  {
    item: "CONTACT US",
    link: '/contact-us',
  },
];

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

export const ourLatest = [
  { 
      img: latestPrjct1,
      text: 'Where does it come from?: Asking the Right Questions',
      para: 'H2O Plant provides innovative water solutions, ensuring sustainability and efficiency for industries, homes, and agriculture through advanced purification technology'
  },
  { 
      img: latestPrjct2,
      text: 'Where does it come from?: Asking the Right Questions',
      para: 'H2O Plant provides innovative water solutions, ensuring sustainability and efficiency for industries, homes, and agriculture through advanced purification technology'
  },
];

export const paragraphs = [
  {
      id: 1,
      para: "The following list of products, which we are manufacturing at our Plant. We also offer in the Generation System as per the requirement of the client packaged drinking water treatment systems for ground bore-well river and tape water applications in standard capacities of portable water production from 10 ltrs per hr to 50000 ltrs per hr and above size. Our company also provides water filters with and without U.V attachment, softener & water vending machines in various capacities."
  },
  {
      id: 2,
      para: "The company can design, manufacture and install customized system to meet our client's requirements. We have already supplied more than 300 industrial and domestic plants for various application like bottled water manufacturers, hospital, villages, schools, colleges, industries, corporate offices, radiators for earth moving equipment etc.",
  },
  {
      id: 3,
      para: "We maintain state of the art technologies and equipment to assist our engineers in the selection and designing of the most effective water treatment systems for the type of raw water available to each individual client."
  }
];

export const clientSpeak = [
  {
    id: 1,
    comment:
      '"As our organisation had almost 20 industrial RO mineral water plant since more than last 20 years. We were facing maintainance and sustainable output of drinking water from our existing plants since last few years. We are thankful to Top H2O Technologies Pvt. Ltd. for giving us roubst solution on and zero percent break downcall system via remote monitoring system with instant SMS alerts. We are highly satisfied with after sales service and support system of Top H2O Technologies."-',
    client: "Brahmakumaries, Mt. Abhu",
  },
  {
    id: 2,
    comment:
      '"RO purified water have its own limitations like it removes 99.5% total dissolve solids from source water. We were searching for the solution on the biggest problem of RO Purified Water and we found Top H2O Technologies Pvt. Ltd who can provide complete solution for RO Purified water which is generally near to deminralised water by adding unique mineral composition that they have by name of PureMagic Plus."',
    client: "NTC India",
  },
];