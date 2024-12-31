import React, { useState } from "react";
import { dmFiltration } from "../../../../db/dummyData";
import {ContentBody, GridBox} from "../../../../ReusableComponents/Products/";

const FiltrationPlant = () => {
  const [selectedIndex, setSelectedIndex] = useState(dmFiltration[1]);

  return (
    <GridBox listData={dmFiltration} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
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

export default FiltrationPlant;
