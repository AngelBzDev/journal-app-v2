import React from 'react'

const RoundedButton = ({children, bg}) => {
  return (
    <button className={`rounded-full bg-${bg} p-5 border-solid border-primary border-2 my-6`}>
      {children}
    </button>
  )
}

export default RoundedButton