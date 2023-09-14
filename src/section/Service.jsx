import React from 'react'
import { support, truckFast } from '../assets/icons'
import { shieldTick } from '../assets/icons'

const Service = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
        <div className='flex-1 border sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
           <img 
           src={truckFast} 
           alt="free-delivery" 
           className='bg-coral-red rounded-lg px-1 py-1'
           />
           <h1 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>Free shipping</h1>
           
           <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>Enjoy seamless shopping with our complimentary shipping service.</p>
        </div>
        
        <div className='flex-1 border sm:w-[350px] w-full sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16'>
           <img 
           src={ shieldTick } 
           alt="secure-pay" 
           className='bg-coral-red  rounded-lg px-1 py-1'
           />
           <h1 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>Secure Payment</h1>
           <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>Experience worry-free transactions with our secure payment options.

</p>
        </div>
        
        <div className='flex-1 border sm:w-[350px] w-full sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16'>
           <img 
           src={support}
           alt="love-support" 
           className='bg-coral-red  rounded-lg px-1 py-1'
           />
           <h1 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>Love to help you</h1>
           <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>Our dedicated team is here to assist you every step of the way.</p>
        </div>
        
    </section>
  )
}

export default Service