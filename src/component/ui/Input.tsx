import React from 'react'

   interface InputProps  {
      placeholder: string;
      onChange : React.ChangeEventHandler<HTMLInputElement>;
      value: string;
      className: string
   }

const Input = ({placeholder, onChange, value, className}: InputProps) => {
  return (
    <input placeholder={placeholder} onChange={onChange} className={` ${className}`} value={value}/>
  )
}

export default Input