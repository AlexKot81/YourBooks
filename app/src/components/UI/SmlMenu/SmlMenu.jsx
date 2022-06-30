import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './SmlMenu.module.sass'


export default function SmlMenu() {
  return (
    <div className={s.sml_menu}>
        <div><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
    </div>
  )
}
