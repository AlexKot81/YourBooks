import React from 'react'
import s from './Logo.module.sass'

export default function Logo() {
  return (
        <div className={s.logo}>
            <img src='./img/Vector.png' alt="logo" className={s.menu_logo}/>
            <p>Pages</p>
        </div>
  )
}
