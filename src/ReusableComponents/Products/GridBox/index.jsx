import React from 'react'
import ListOfContent from '../ListOfContent';

const GridBox = ({ children, listData, listIndex, setListIndex }) => {
  return (
    <main className="grid grid-cols-[25%_71.5%] gap-10">
      <ListOfContent
        dummyData={listData}
        setSelectedIndex={setListIndex}
        selectedIndex={listIndex}
      />

      {children}
    </main>
  )
}

export default GridBox;