import React, { useState } from "react";
import { swimmingPoolFiltration } from "../../../../db/dummyData";
import { ContentBody, GridBox } from "../../../../ReusableComponents/Products/";
import { poolFiltration } from "../../../../assets";

const SwimmingPool = () => {
  const [selectedIndex, setSelectedIndex] = useState(swimmingPoolFiltration[1]);

  return (
    <GridBox
      listData={swimmingPoolFiltration}
      listIndex={selectedIndex}
      setListIndex={setSelectedIndex}
    >
      {selectedIndex && (
        <div>
          <ContentBody title={selectedIndex?.name} img={selectedIndex?.img} />

          <img src={poolFiltration} className="my-10" />
        </div>
      )}
    </GridBox>
  );
};

export default SwimmingPool;
