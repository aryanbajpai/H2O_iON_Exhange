import React, { useState } from "react";
import { ContentBody, GridBox } from "../../../../ReusableComponents/Products/";
import { packageDrinking } from "../../../../db/dummyData";

const PackageDrinking = () => {
  const [selectedIndex, setSelectedIndex] = useState(packageDrinking[1]);

  return (
    <GridBox listData={packageDrinking} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <>
          <ContentBody
            title={selectedIndex?.name}
            img={selectedIndex?.img || undefined}
          />
          {!selectedIndex?.img && <p>Coming Soon...</p>}
        </>
      )}
    </GridBox>
  );
};

export default PackageDrinking;
