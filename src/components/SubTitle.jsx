import React from 'react'

const SubTitle = (props) => {
  return (
    <h2 className={`text-xl md:text-2xl font-semibold ${props.className}`}>{props.children}</h2>
  )
}

export default SubTitle