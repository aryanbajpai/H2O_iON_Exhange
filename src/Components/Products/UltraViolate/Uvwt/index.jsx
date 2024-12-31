import React, { useState } from "react";
import { ultraViolateTreatment } from "../../../../db/dummyData";
import {ContentBody, GridBox} from "../../../../ReusableComponents/Products/";

const Uvwt = () => {
  const [selectedIndex, setSelectedIndex] = useState(ultraViolateTreatment[1]);

  return (
    <GridBox listData={ultraViolateTreatment} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.img}
        />
      )}
    </GridBox>
  );
};

export default Uvwt;
