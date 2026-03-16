import React from 'react'
import { Link } from 'react-scroll'

const LogoPart = ({className}) => {
  return (
    <Link   to="section1" smooth={true} duration={900} offset={0} spy={true}> 
      <div className='cursor-pointer'>
        <span className={`${className} text-2xl lg:text-3xl  font-bold pointer-events-none bg-gradient-to-r  from-[rgb(135,80,247)] to-white bg-clip-text text-transparent`}> Asaduzzaman Rahim </span>
      </div>
    </Link>
  )
}

export default LogoPart
