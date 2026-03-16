import React from 'react'
import {Link} from "react-scroll"

const MenuBer = ({className}) => {
  return (
    <div>
        <ul className={`${className} gap-[40px] lg:flex items-center pt-3.5 text-[16px] mb-[14px] font-medium tracking-[2px] text-white space-y-2`}>
            <li className='cursor-pointer'><Link  to="section1" smooth={true} duration={500} offset={0} spy={true}>Home</Link></li>
            <li className='cursor-pointer'><Link  to="section2" smooth={true} duration={500} offset={-100} spy={true}>Service</Link></li>
            <li className='cursor-pointer'><Link  to="section3" smooth={true} duration={500} offset={-100} spy={true}>About</Link></li>
            <li className='cursor-pointer'><Link  to="section4" smooth={true} duration={500} offset={-100} spy={true}>Protfolio</Link></li>
            <li className='cursor-pointer'><Link  to="section5" smooth={true} duration={500} offset={-100} spy={true}>Testimonial</Link></li>
            <li className='cursor-pointer'><Link  to="section6" smooth={true} duration={500} offset={-100} spy={true}>Contact Me</Link></li>
        </ul>
    </div>
  )
}

export default MenuBer
