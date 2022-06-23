import React from 'react'
import s from './Footer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Logo from '../UI/Logo/Logo'


export default function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.footer_icon}>
            <Logo />
            <div>
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </div>
        </div>
        <div className={s.footer_explore}></div>
        <div className={s.footer_utility}></div>
        <div className={s.footer_contact}></div>
    </div>
  )
}
