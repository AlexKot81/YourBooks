import React from 'react'
import Button from '../UI/Button'
import s from './MainMenu.module.sass'

export default function MainMenu() {
  return (
    <div className={s.main_menu}>
        <div className={s.logo}>
            <img src='Vector.png' alt="logo" className={s.menu_logo}/>
            <p>Pages</p>
        </div>
        <div className={s.menu_link}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Pages</a>
            <a href="#">Contact Us</a>
        </div>
        <Button/>
    </div>
  )
}
