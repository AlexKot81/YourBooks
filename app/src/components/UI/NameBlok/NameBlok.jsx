import React from 'react'
import s from './NameBlok.module.sass'


export default function NameBlok({props}) {
  return (
        <h2 className={s.learn_start}>{props}</h2>
  )
}
