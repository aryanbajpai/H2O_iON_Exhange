import React from 'react'

const Paragraph = ({ addClass, para }) => {
  return (
    <p className={`text-[#9b9b9b] ${addClass}`}>{para}</p>
  )
}

export default Paragraph;