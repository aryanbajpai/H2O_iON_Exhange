import React, { useState } from "react";
import { addedMineralData } from "../../../../db/dummyData";
import {ContentBody, GridBox} from "../../../../ReusableComponents/Products/";

const PurifiedWater = () => {
  const [selectedIndex, setSelectedIndex] = useState(addedMineralData[1]);

  return (
    <GridBox listData={addedMineralData} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.img}
        />
      )}
    </GridBox>
  );
};

export default PurifiedWater;
