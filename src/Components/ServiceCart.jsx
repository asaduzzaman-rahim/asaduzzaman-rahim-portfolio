import React from 'react'
import {motion} from "framer-motion"


const ServiceCart = ({className, IconPart, HeadingPart, DetailsPart}) => {
  return (
    <motion.div 
    
    className={`${className} px-[10px] py-[15px] md:py-[34px] md:px-[30px] text-center w-[600px]  shadow-2xl bg-bgcart rounded-3xl `}>
        <span className='text-[40px] md:text-[60px] text-center text-orange mx-auto inline-block'>{IconPart}</span>
        <h3 className='text-[16px] md:text-2xl  font-bold tracking-[2px] text-orange md:leading-14 pt-4'>{HeadingPart}</h3>
        <p className='pt-[16px] text-[16px] lg:text-xl font-medium text-whiteDark  leading-8'>{DetailsPart}</p>
    </motion.div>
  )
}

export default ServiceCart
