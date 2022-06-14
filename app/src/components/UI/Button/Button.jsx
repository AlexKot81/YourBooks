import React from 'react'
import s from './Button.module.sass'
export default function Button({props}) {
  return (
    <button className={s.btn}>{props}</button>
  )
}
