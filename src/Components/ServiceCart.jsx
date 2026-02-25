import React from 'react'

const ServiceCart = ({className, IconPart, HeadingPart, DetailsPart}) => {
  return (
    <div className={`${className} py-[34px] px-[30px] text-center w-[395px] shadow-2xl bg-bgcart rounded-3xl `}>
        <span className='text-[60px] text-center text-orange mx-auto inline-block'>{IconPart}</span>
        <h3 className='text-2xl font-bold tracking-[2px] text-orange leading-14 pt-4'>{HeadingPart}</h3>
        <p className='pt-[18px] text-xl font-medium text-whiteDark leading-8'>{DetailsPart}</p>
    </div>
  )
}

export default ServiceCart
