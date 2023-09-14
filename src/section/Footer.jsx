import React from 'react'
import FotterLogo from '../assets/images/footer-logo.svg'
import { socialMedia,footerLinks } from '../constants'


const Footer = () => {
  return (
    <section className='max-container '>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className=' flex flex-col items-start justify-center '>
        <img src={FotterLogo} alt="logo" width={140} />

        <p className='text-white mt-4 font-montserrat font-normal text-base leading-6  sm:max-w-sm'>
        Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards 
        </p>
        <div className='flex  justify-between file:items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
      </div>
          
      <div className='text-white  flex-1 flex lg:10 gap-20 flex-wrap  '>
    

        
        {
            footerLinks.map((item)=>(
                <div key={item.title} className=''>
             <h4 className='font-bold font-montserrat pb-5'>
                {item.title}
             </h4>
             <ul>
               {item.links.map((link)=>(
                <li key={link.name} className='font-medium font-montserrat text-sm leading-6'>
                    <a href={link.link}>{link.name}</a>
                </li>
               ))
              }
             </ul>
                </div>
            ))
        }
        
      </div>

      </div>
      <div className='text-white flex-1 flex  max-lg:flex-col justify-evenly items-center mt-20'>
        <h4 className='font-montserrat text-base leading-7'> 
            <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Copyright.All rights reserved.</h4>
        <p className='font-montserrat text-base'>Terms & Conditions</p>
      </div>
    </section>
  )
}

export default Footer