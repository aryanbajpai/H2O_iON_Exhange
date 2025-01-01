import React, { useState } from 'react'
import { plantSeaWater } from '../../../../db/dummyData';
import { seaWaterPlantImg } from '../../../../assets';
import { GridBox } from '../../../../ReusableComponents/Products';
import { Heading } from '../../../../ReusableComponents';
import { Paragraph } from '../../../../Basics';

const Info = () => {
  const [selectedIndex, setSelectedIndex] = useState(plantSeaWater[1]);

  return (
    <GridBox listData={plantSeaWater} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <div>
          <Heading text={selectedIndex?.name} />
          <Paragraph para='Reverse osmosis (RO) is a membrane- technology filtration method that removes many types of large molecules and iocn from solutions by applying to the solutions when it is on one side of a selective membrane. The result is that the solute is that the is retained on the pressurized side of the membrane and the pure solvent is allowed to pass to other side. To be”selective” this membrane should not allow large molecules or ions through the pores (holes), but should allow smaller components of the solutions (Such as the solvent) to pass freely.' addClass={"my-5"} />
          <img src={seaWaterPlantImg} className='my-7' />
          <Paragraph para='In the normal osmosis process, the solvent naturally moves from an area of low solute concentration (High Water Potential), through a membrane, to an area of high solute concentration (Low water Potential). The movement of a pure solvent to equalize solute concentrations on each side of a membrane generates osmotic pressure. Applying an external pressure to reverse the natural flow of pure solvent, thus, is reverse osmosis. The process is similar to other membrane technology applications. However, there are key differences between reverse osmosis and filtrations. The predominant removal mechanism in membrane filtrations is straining, or size exclusion, so the process can theoretically achieve perfect exclusion of particles regardless of operational parameter such as influent pressure and concentration. Reverse osmosis, however, involves a diffusive mechanism so that separation efficiency is dependent on solute concentration, pressure, and water flux rate.[1] Reverse osmosis is most commonly known for its use in drinking water purification from seawater, removing the salt and other substances from the water molecules.' addClass={"my-5"} />
        </div>
      )}
    </GridBox>
  );
}

export default Info