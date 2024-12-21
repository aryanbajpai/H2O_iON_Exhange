import React from 'react'

const ItalicSubHead = ({subHead, dark}) => {
  return (
    <p className={`text-xl mt-5 italic ${dark ? "text-gray-200" : "text-[#383838]"}`}>{subHead}</p>
  )
}

export default ItalicSubHead;