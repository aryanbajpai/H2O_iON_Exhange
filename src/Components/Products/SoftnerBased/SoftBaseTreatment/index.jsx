import React, { useState } from "react";
import { softBaseTreatment } from "../../../../db/dummyData";
import {ContentBody, GridBox} from "../../../../ReusableComponents/Products/";

const SoftBaseTreatment = () => {
  const [selectedIndex, setSelectedIndex] = useState(softBaseTreatment[1]);

  return (
    <GridBox listData={softBaseTreatment} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.img}
          quality={selectedIndex?.quality}
        />
      )}
    </GridBox>
  );
};

export default SoftBaseTreatment;
