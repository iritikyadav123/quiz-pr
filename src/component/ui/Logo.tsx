import React from 'react'

interface logoProps  {
    className : string;
    imgUrl : string;
    subTitle: string; 
}

const Logo = ({className, imgUrl, subTitle} : logoProps) => {
  return (
    <div className={` flex items-center justify-start gap-3 cursor-pointer ${className}`}>
        <img src={imgUrl} className='object-cover object-center w-[12%] sm:w-[15%] h-fit '/>
        <div className='text-md md:text-4xl font-bold'>Quiz<span className='text-indigo-700'>{subTitle}</span></div>
    </div>
  )
}

export default Logo