import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './SmlMenu.module.sass'


export default function SmlMenu({activ, setActiv}) {
  return (
    <div className={s.sml_menu}>
        <div onClick={()=> setActiv(!activ)}><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
    </div>
  )
}
