import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`${className} flex flex-wrap  lg:flex-nowrap  `}>
      {children}
    </div>
  )
}

export default Flex
