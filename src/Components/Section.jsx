import React from 'react'

const Section = ({children, className}) => {
  return (
    <div className={`${className} py-[40px] lg:py-[70px]`}>
      {children}
    </div>
  )
}

export default Section
