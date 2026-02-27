import React from 'react'
import {motion} from "framer-motion"


const ServiceCart = ({className, IconPart, HeadingPart, DetailsPart}) => {
  return (
    <motion.div 
    
    className={`${className} px-[10px] py-[15px] md:py-[34px] md:px-[30px] text-center w-[600px]  shadow-2xl bg-none border-1 border-[#8750f7] rounded-3xl hover:bg-[#8750f7] hover:border-white duration-100  group `}>
        <span className='text-[40px] md:text-[60px] text-center text-[#8750f7] group-hover:text-white  mx-auto inline-block'>{IconPart}</span>
        <h3 className='text-[16px] md:text-2xl  font-bold tracking-[2px] text-white md:leading-14 '>{HeadingPart}</h3>
        <p className=' text-[16px] lg:text-xl font-medium text-white  leading-8'>{DetailsPart}</p>
    </motion.div>
  )
}

export default ServiceCart
