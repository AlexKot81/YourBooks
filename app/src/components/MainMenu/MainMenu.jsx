import React from 'react'
import MediaQuery from 'react-responsive'
import BtnIcon from '../UI/BtnIcon/BtnIcon'
import Button from '../UI/Button'
import Logo from '../UI/Logo/Logo'
import SmlMenu from '../UI/SmlMenu/SmlMenu'
import s from './MainMenu.module.sass'

export default function MainMenu() {
  return (
    <div className={s.main_menu}>
      <Logo />
      <BtnIcon />
      <div className={s.menu_link}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pages</a>
          <a href="#">Contact Us</a>
      </div>
      <MediaQuery minWidth={700}>
        <Button props={"Order Today"}/>
      </MediaQuery>
      <SmlMenu />
    </div>
  )
}
