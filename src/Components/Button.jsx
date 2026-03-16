import React from 'react'

const Button = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`${className} bg-primary font-bold text-white px-[40px] py-[12px] rounded-[5px] cursor-pointer`}>
      {children}
    </button>
  )
}

export default Button
