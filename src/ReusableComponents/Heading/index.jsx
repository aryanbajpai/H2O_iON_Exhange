import React from 'react'

const Heading = ({text, span, dark}) => {
  return (
    <div className={`text-3xl font-bold ${dark ? "text-[#0088b0]" : "text-[#383838]"}`}>{text} <span className='text-[#33a0c2]'>{span}</span></div>
  )
}

export default Heading