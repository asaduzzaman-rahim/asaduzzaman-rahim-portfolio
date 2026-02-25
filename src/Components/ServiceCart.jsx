import React from 'react'

const ServiceCart = ({className, IconPart, HeadingPart, DetailsPart}) => {
  return (
    <div className={`${className} px-[10px] py-[15px] md:py-[34px] md:px-[30px] text-center w-[205px] md:w-[395px] shadow-2xl bg-bgcart rounded-3xl `}>
        <span className='text-[40px] md:text-[60px] text-center text-orange mx-auto inline-block'>{IconPart}</span>
        <h3 className='text-[16px] md:text-xl  font-bold tracking-[2px] text-orange md:leading-14 pt-4'>{HeadingPart}</h3>
        <p className='pt-[8px] md:pt-[16px] text-[14px]  lg:text-xl font-medium text-whiteDark  md:leading-8'>{DetailsPart}</p>
    </div>
  )
}

export default ServiceCart
