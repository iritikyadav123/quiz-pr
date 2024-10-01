import React from 'react'

const NumberBox = ({index}: {index: number}) => {
  return (
    <div className='bg-indigo-700 h-7 w-7 rounded-md flex items-center justify-center text-white font-semibold'>{index}</div>
  )
}

export default NumberBox