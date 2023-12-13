import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.direction} className={`bg-primary inline-block text-center p-3 mt-5 rounded-md text-amber-950 ${props.className}`} onClick={props.onClick}>{props.children}</Link>
  )
}

export default Button