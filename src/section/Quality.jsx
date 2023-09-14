import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const Quality = () => {
  return (
    <section className='padding-x mt-8 wide:mr-12 flex justify-between items-center gap-28  max-lg:flex-col'>
        <div className='flex flex-1 flex-col'>

    <h1 className='font-palanquin font-bold lg:max-w-lg  text-4xl'>
     We Provide You  
      <span className=' text-coral-red'> Super </span >  
        <span className='text-coral-red '> Quality </span>Shoes
        
    </h1>
    < p className='info-text mb-4 mt-6'>
    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
    </p>
    <p className='info-text mb-8 mt-6'>
       Our dedication to detail and excellence ensures your satisfaction
    </p>
    <Button name="Shop Now"/>
    </div>
<div className='flex-1 flex justify-center items-center'>
<img 
    src={shoe8} 
    alt="premium" 
    className='py-5 object-contain'
    />
</div>
    
    </section>
  )
}

export default Quality