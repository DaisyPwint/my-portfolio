import React from 'react'

const Title = (props) => {
  return (
    <h1 className={`md:text-4xl text-3xl font-bold text-primary mb-5 ${props.className}`}>{props.children}</h1>
  )
}

export default Title