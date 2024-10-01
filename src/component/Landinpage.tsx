import  { useState } from 'react'

import { Button } from './ui/Button'


const Landinpage = () => {
      const [login, setLogin] = useState(false)
  return (
    <section className='flex flex-col items-center justify-center size-full h-[90vh] gap-52'>
         <main className='flex flex-col items-center justify-center gap-4 text-center  w-[80%]'>
            {
                login == true ? <> <h2 className='text-3xl md:text-4xl font-semibold'>Learn 10x <span className='text-indigo-700'>Faster</span></h2>
                <h3 className='text-gray-800 font-medium tracking-wider'>Unlock Your Potential with Personalized Quizzes</h3>
                <Button className='w-60'  children='Get Started Now'/></> : <>
                        <img src='./surprise.png' alt='msg.box' className='h-32 sm:60'/>
                        <h2 className='text-3xl md:text-4xl font-semibold'>Quizzes await! Make One</h2>
                        <h3 className='text-gray-800 font-medium tracking-wider'>Check Below to begin your journey here</h3>
                        <Button className='w-60'  children='Create My Quiz Now'/>
                </>
            }
         </main>
    </section>
  )
}

export default Landinpage