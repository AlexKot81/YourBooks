import React from 'react'
import s from './BtnIcon.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function BtnIcon({...props}) {
  return (
    <div>
        <div className={s.btn_icon} style={props.style_foot}>
              <div><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></div>
              <div><FontAwesomeIcon icon="fa-brands fa-twitter" /></div>
              <div><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></div>
              <div><FontAwesomeIcon icon="fa-brands fa-instagram" /></div>
            </div>
    </div>
  )
}
