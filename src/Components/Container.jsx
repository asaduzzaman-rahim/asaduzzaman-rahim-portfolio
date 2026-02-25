import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`${className} container mx-auto px-3 md:px-0 `}>
      {children}
    </div>
  )
}

export default Container
