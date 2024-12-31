import React, { useState } from "react";
import { ultraFiltrationTreatment } from "../../../../db/dummyData";
import {ContentBody, GridBox} from "../../../../ReusableComponents/Products/";

const Ufwt = () => {
  const [selectedIndex, setSelectedIndex] = useState(ultraFiltrationTreatment[1]);

  return (
    <GridBox listData={ultraFiltrationTreatment} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.img}
        />
      )}
    </GridBox>
  );
};

export default Ufwt;
