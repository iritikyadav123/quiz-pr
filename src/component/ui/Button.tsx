import React from 'react'

interface buttonProps {
    children : string;
    className: String;
    onClick : React.MouseEventHandler<HTMLButtonElement>;
    disable? : boolean
}

export const Button = ({children ,className, onClick, disable = false}: buttonProps) => {
  return (
    <button disabled={disable} onClick={onClick} className={` bg-indigo-700 pl-5 pr-5 p-2 active:-translate-y-1 active:shadow-xl text-blue-50 flex items-center justify-center font-semibold text-xl rounded-lg ${className}`}>{children}</button>
  )
}
