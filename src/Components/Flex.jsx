import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`${className} flex flex-wrap  `}>
      {children}
    </div>
  )
}

export default Flex
