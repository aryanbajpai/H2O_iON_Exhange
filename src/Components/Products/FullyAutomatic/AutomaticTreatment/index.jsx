import React, { useState } from "react";
import { AutomaticWaterTreatment } from "../../../../db/dummyData";
import {ContentBody, ListOfContent} from "../../../../ReusableComponents/Products/";

const AutomaticTreatment = () => {
  const [selectedIndex, setSelectedIndex] = useState(AutomaticWaterTreatment[2]);
  console.log(selectedIndex?.child?.quality);

  return (
    <main className="grid grid-cols-[25%_71.5%] gap-10">
      <ListOfContent
        dummyData={AutomaticWaterTreatment}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />

      {selectedIndex && (
        <ContentBody
          title={selectedIndex?.name}
          img={selectedIndex?.img}
          quality={selectedIndex?.child?.quality}
          modal={selectedIndex?.child?.model}
          facility={selectedIndex?.child?.facility}
        />
      )}
    </main>
  );
};

export default AutomaticTreatment;
