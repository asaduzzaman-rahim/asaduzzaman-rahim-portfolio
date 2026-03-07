import React from 'react'

const MenuBer = ({className}) => {
  return (
    <div>
        <ul className={`${className} gap-[60px] lg:flex items-center pt-3.5 text-[16px] mb-[14px] font-medium tracking-[2px] text-white space-y-2`}>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Protfolio</li>
            <li>Contact Me</li>
        </ul>
    </div>
  )
}

export default MenuBer
