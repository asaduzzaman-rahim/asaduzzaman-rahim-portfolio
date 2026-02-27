import React from 'react'

const HeadingCart = ({heading, details}) => {
  return (
    <div className='text-center'>
      <h2 className='text-[30px] lg:text-[40px] font-bold bg-gradient-to-r from-[rgb(135,80,247)] to-white bg-clip-text text-transparent tracking-[3px]'>{heading}</h2>
      <p className='text-[14px] md:text-[14px] pt-3 lg:text-[18px] font-medium text-white '>{details}</p>
    </div>
  )
}

export default HeadingCart
