import React, { useState } from 'react'
import { Button } from './ui/Button'
import Logo from './ui/Logo'

const Navbar = () => {
    const [login, setLogin] = useState(false)
      let userName = "Ritik";
  return (
    <section className='flex flex-col items-center justify-center size-full'>
        <header className='flex items-center justify-between sm:w-[95%] w-[98%] h-20'>
            <Logo imgUrl='./logo.png' subTitle='Max' className='w-36 sm:w-72 h-16' />
           <article className='flex justify-center items-center gap-4'>
            {
                login == true ? <><Button children='Sign-in'/>
                    <Button children='Sign-of'/> </> :  <>
                      <div className='md:text-xl text-sm font-semibold'>Welcome: {userName} <span className='text-indigo-700'>10x</span></div>
                     <Button children='Logout'/></>
            }
           </article>
         </header>
    </section>
  )
}

export default Navbar