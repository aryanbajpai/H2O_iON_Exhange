import React, { useState } from 'react'
import { plantSeaWater } from '../../../../db/dummyData';
import { seaWaterPlantImg } from '../../../../assets';
import { ContentBody, GridBox } from '../../../../ReusableComponents/Products';

const Info = () => {
    const [selectedIndex, setSelectedIndex] = useState(plantSeaWater[1]);

    return (
      <GridBox listData={plantSeaWater} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
        {selectedIndex && (
          <div>
            
        <ContentBody title={selectedIndex?.name} />
            <img src={seaWaterPlantImg} />
          </div>
        )}
      </GridBox>
    );
}

export default Info