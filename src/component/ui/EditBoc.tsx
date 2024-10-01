import React from 'react'

const EditBoc = () => {
  return (
    <div className='h-20 w-36 bg-indigo-100/90 rounded-md absolute right-6 flex flex-col items-center justify-center gap-2'>
         <button className='border w-[95%] h-[40%] font-semibold text-md hover:-translate-y-1 active:bg-indigo-700 active:text-white border-indigo-700 rounded-md'>Edit</button>
         <button className='border w-[95%] h-[40%] font-semibold text-md hover:-translate-y-1 active:bg-indigo-700 active:text-white border-indigo-700 rounded-md'>Delete</button>
    </div>
  )
}

export default EditBoc