import React, { useState } from "react";
import { RoPlantTreatments } from "../../../../db/dummyData";
import {ContentBody, ListOfContent} from "../../../../ReusableComponents/Products/";

const TreatmentPlants = () => {
  const [selectedIndex, setSelectedIndex] = useState(RoPlantTreatments[1]);
  console.log(selectedIndex?.child?.quality);

  return (
    <main className="grid grid-cols-[25%_71.5%] gap-10">
      <ListOfContent
        dummyData={RoPlantTreatments}
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

export default TreatmentPlants;
