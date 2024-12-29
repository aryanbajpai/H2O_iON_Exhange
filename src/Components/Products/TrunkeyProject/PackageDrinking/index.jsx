import React, { useState } from "react";
import { PackageDrinkingPlant } from "../../../../db/dummyData";
import {ContentBody, ListOfContent} from "../../../../ReusableComponents/Products/";

const PackageDrinking = () => {
  const [selectedIndex, setSelectedIndex] = useState(PackageDrinkingPlant[1]);
  console.log(selectedIndex?.child?.quality);

  const PackageDrinkingPlant = [
    {
      id: 1,
      name: 'All Products',
      img: ''
    },
    {
      id: 2,
      name: 'Packaged Drinking Water Turnkey Project',
      img :'',
    },
    {
      id: 3,
      name: 'R O Plant',
      img: '',
    },
    {
      id: 4,
      name: 'U.V',
      img: '',
    },
    {
      id: 5,
      name: 'SS Storage Tank',
      img: '',
    },
    {
      id: 6,
      name: 'Ozonation',
      img: '',
    },
    {
      id: 7,
      name: 'Oxygen Market.',
      img: ''
    },
    {
      id: 8,
      name: 'Ozonation Transfer Pump.',
      img: ''
    },
    {
      id: 9,
      name: 'Transfer Pump.',
      img :'',
    },
    {
      id: 10,
      name: 'Pouch Packing',
      img: '',
    },
    {
      id: 11,
      name: 'Glass Packing',
      img: '',
    },
    {
      id: 12,
      name: 'Jar Wash Filling and Packing',
      img: '',
    },
    {
      id: 13,
      name: 'Auto Bottle Washing, Filling and Capping Machine.',
      img: '',
    },
    {
      id: 14,
      name: 'Batch Coding',
      img: ''
    },
    {
      id: 15,
      name: 'Shrink Tunnel',
      img: ''
    },
    {
      id: 16,
      name: 'Shrink Tunnel with web Sealer',
      img :'',
    },
    {
      id: 17,
      name: 'Blow Modeling',
      img: '',
    },
    {
      id: 18,
      name: 'Air Compressors',
      img: '',
    },
    {
      id: 19,
      name: 'Cooling Towers',
      img: '',
    },
  ];

  return (
    <main className="grid grid-cols-[25%_71.5%] gap-10">
      <ListOfContent
        dummyData={AutomaticWaterTreatment}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />

      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.child?.img}
          quality={selectedIndex?.child?.quality}
          modal={selectedIndex?.child?.model}
          facility={selectedIndex?.child?.facility}
        />
      )}
    </main>
  );
};

export default PackageDrinking;
