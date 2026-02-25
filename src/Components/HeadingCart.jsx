import React from 'react'

const HeadingCart = ({heading, details}) => {
  return (
    <div className='text-center'>
      <h2 className='text-[30px] lg:text-[40px] font-bold text-white tracking-[3px]'>{heading}</h2>
      <p className='text-[18px] md:text-[20px] pt-3 lg:text-[25px] font-medium text-whiteDark tracking-[1px] lg:tracking-[3px]'>{details}</p>
    </div>
  )
}

export default HeadingCart
