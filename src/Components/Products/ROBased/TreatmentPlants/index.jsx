import React, { useState } from "react";
import { RoPlantTreatments } from "../../../../db/dummyData";
import { ContentBody, GridBox } from "../../../../ReusableComponents/Products/";

const TreatmentPlants = () => {
  const [selectedIndex, setSelectedIndex] = useState(RoPlantTreatments[1]);

  console.log(selectedIndex?.id);
  return (
    <GridBox
      listData={RoPlantTreatments}
      listIndex={selectedIndex}
      setListIndex={setSelectedIndex}
    >
      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.child?.img}
          quality={selectedIndex?.child?.quality}
          modal={selectedIndex?.child?.model}
          facility={selectedIndex?.child?.facility}
        />
      )}
    </GridBox>
  );
};

export default TreatmentPlants;
