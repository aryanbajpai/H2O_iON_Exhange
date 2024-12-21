import React from 'react'

const InputFields = ({type, placeholder, onChange, style}) => {
  return (
    <input type={type} placeholder={placeholder} className={`outline-none w-full ${style}`} onChange={onChange} />
  )
}

export default InputFields