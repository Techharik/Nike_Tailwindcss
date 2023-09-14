import React from 'react'
import { products } from '../constants';
import { star } from '../assets/icons';
const Ourproducts = () => {
  return (
    <section className='padding-x mt-14 wide:mr-12 '>
      <div className='flex flex-col justify-start gap-5'>
            <h1 className='text-[40px] font-palanquin font-bold'>
                Our 
                <span className='text-coral-red '> Popular </span>
                <span className='pr-2 max-lg:block '>
                    Products
                </span>
                
            </h1>
            <p className='my-5 font-montserrat text-slate-gray text-md leading-6 lg:w-[40%] '>
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
            </p>
            <div className='flex flex-row justify-between max-sm:flex-col gap-5 flex-wrap'>
                {products.map((prod)=>(
                    <div className='font-montserrat mb-8' key={prod.name}>
                        <img 
                         src={prod.imgURL} 
                         alt="products-img" 
                         className='pb-5'
                        />
                    <div className='flex justify-start items-center space-x-2'>
                        <img src={star} alt="star-img" />
                      <span className='info-text pt-2'>(4.5)</span>  </div>
                    <h1 className='font-palanquin font-semibold leading-6 text-[24px] pt-2'>{prod.name}</h1>
                    <p className='leading-6 pt-2 text-coral-red font-semibold'>{prod.price}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    </section>
  )
}

export default Ourproducts;