import React from 'react'

const TextAreaField = ({ placeholder, style }) => {
  return (
    <textarea placeholder={placeholder} className={`w-full ${style}`}></textarea>
  )
}

export default TextAreaField