import React, { useState } from "react";
import { swimmingPoolFiltration } from "../../../../db/dummyData";
import { ContentBody, GridBox } from "../../../../ReusableComponents/Products/";
import { poolFiltration } from "../../../../assets";
import { Paragraph } from "../../../../Basics";

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

          <Paragraph para="A properly maintained pool is one that is visually and biologically cleans. If the chlorine and PH levels are maintained, bacteria and algae will be killed and the pool will be biologically safe. Filtration is mechanical process of removing insoluble matter from swimming pool water. Pool water carrying particulate matter, solid and debris is passed through filtering media that allow clear water to return to the pool. Water clarity is important for appearance, hygiene and safety." />
          <Paragraph
            para="Disinfection: Disinfection is the most important single factor in maintaining a safe pool. Chlorine is the most widely applied disinfecting agent for the swimming pool water. Its not only destroys harmful organisms such as bacteria, algae, fungi, viruses but it also destroy impurities that are not removed by filtration."
            addClass={"my-5"}
          />
        </div>
      )}
    </GridBox>
  );
};

export default SwimmingPool;
