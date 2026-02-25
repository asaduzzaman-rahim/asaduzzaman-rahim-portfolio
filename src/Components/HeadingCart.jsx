import React from 'react'

const HeadingCart = ({heading, details}) => {
  return (
    <div className='text-center'>
      <h2 className='text-[40px] font-bold text-white tracking-[3px]'>{heading}</h2>
      <p className='text-[20px] font-medium text-whiteDark tracking-[3px]'>{details}</p>
    </div>
  )
}

export default HeadingCart
