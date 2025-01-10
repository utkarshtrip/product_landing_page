import React from 'react'
import ButtonStyles from './Button.module.css'
const Button = ({text,type,onclick,disabled,loading}) => {
  return (
    <button onClick={(e)=>onclick(e)} className=''>{text}</button>
  )
}

export default Button