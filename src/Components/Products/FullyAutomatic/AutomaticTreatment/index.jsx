import React, { useState } from "react";
import { AutomaticWaterTreatment } from "../../../../db/dummyData";
import {ContentBody, GridBox, ListOfContent} from "../../../../ReusableComponents/Products/";

const AutomaticTreatment = () => {
  const [selectedIndex, setSelectedIndex] = useState(AutomaticWaterTreatment[2]);
  console.log(selectedIndex?.child?.quality);

  return (
    <GridBox listData={AutomaticWaterTreatment} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.img}
          // quality={selectedIndex?.quality}
        />
      )}
    </GridBox>
  );
};

export default AutomaticTreatment;
