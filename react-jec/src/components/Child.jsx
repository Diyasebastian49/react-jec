import React from 'react'

const Child = ({name,dept}) => {
  return (
   <>
   <h1>Child Comp</h1>
   <h2>Name:{name}</h2>
   <h2>Department:{dept}</h2>
   </>
  )
}

export default Child