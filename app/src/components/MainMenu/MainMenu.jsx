import React, {useState} from 'react'
import MediaQuery from 'react-responsive'
import BtnIcon from '../UI/BtnIcon/BtnIcon'
import Button from '../UI/Button'
import Logo from '../UI/Logo/Logo'
import SmlMenu from '../UI/SmlMenu/SmlMenu'
import s from './MainMenu.module.sass'

export default function MainMenu({menuactiv, setmenuactiv}) {

  return (
    <div className={s.main_menu}>
      <Logo />
      <MediaQuery minWidth={1100}>
        <BtnIcon />
      </MediaQuery>
      <div className={s.menu_link} style={{right: menuactiv && '0'}} onClick={()=>setmenuactiv(false)}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pages</a>
          <a href="#">Contact Us</a>
      </div>
      <MediaQuery minWidth={450}>
        <Button props={"Order Today"}/>
      </MediaQuery>
      <MediaQuery maxWidth={880}>
        <SmlMenu activ={menuactiv} setActiv={setmenuactiv}/>
      </MediaQuery>
    </div>
  )
}
