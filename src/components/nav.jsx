import React from 'react'
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
       <nav className='flex justify-between items-center max-container'>
           <a href='/'>
            <img src={headerLogo} alt="logo" 
            width={129}
            height={29}
            />
           </a>

           <ul className='flex-1 flex justify-center items-center gap-16  max-lg:hidden'>
            {navLinks.map(nav =>(
                <li>
                    <a 
                    href={nav.href}
                    className='font-montserrat'
                    >
                        {nav.label}
                    </a>
                </li>
            ))}
           </ul>
           <div className='flex text-lg leading-normal font-medium wide:mr-24 max-lg:hidden'>
                    
          <a href='/'className='font-montserrat' >Sign in</a>
          <span>/</span>
          <a href='/' className='font-montserrat'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        </nav> 
    </header>
  )
}

export default Nav