import React from 'react'
import Button from '../components/Button'

const Newsletter = () => {
  return (
        <section className='max-container flex max-lg:flex-col gap-10 justify-center flex-wrap items-center'>
            <div>
            <h1 className='font-bold font-palanquin text-4xl lg:max-w-md'>
                Sing Up From 
                <span className='text-coral-red'> Updates </span> & Newsletter
            </h1>
            </div>


      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
               <input 
               type="email"
                name="email" 
                id="email"
                 placeholder='subscribe@nike.com' 
                 className='input'
                 />
                 <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                 <Button name="Sign Up"  /> 

                 </div>
            </div> 

        </section>
  )
}

export default Newsletter