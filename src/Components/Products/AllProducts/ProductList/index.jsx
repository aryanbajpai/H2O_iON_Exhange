import React, { useState } from 'react'
import { allProductsData } from '../../../../db/dummyData';
import { GridBox } from '../../../../ReusableComponents/Products';
import ZoomInComponent from '../../../../ReusableComponents/ZoomInComponent';
import { autoFilter, iro1000 } from '../../../../assets';

const ProductList = () => {
    const [selectedIndex, setSelectedIndex] = useState(allProductsData[0]);

    const newData = allProductsData?.filter((d) => d?.id !== 1)
    console.log(newData)

    return (
      <GridBox
        listData={allProductsData}
        listIndex={selectedIndex}
        setListIndex={setSelectedIndex}
      >
        <ZoomInComponent dummyData={newData} hover={true} />
      </GridBox>
    )
}

export default ProductList