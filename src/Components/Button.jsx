import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`${className} bg-gradient-orange font-bold text-white px-[40px] py-[12px] rounded-[5px]`}>
      {children}
    </button>
  )
}

export default Button
