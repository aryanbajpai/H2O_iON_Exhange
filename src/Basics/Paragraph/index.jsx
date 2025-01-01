import React from 'react'

const Paragraph = ({ addClass, para }) => {
  return (
    <p className={`text-[#a8a8a8] ${addClass}`}>{para}</p>
  )
}

export default Paragraph;