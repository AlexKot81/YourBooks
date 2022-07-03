import React from 'react'
import MediaQuery from 'react-responsive'
import Button from '../UI/Button'
import s from './BlokWelkome.module.sass'

export default function BlokWelkome() {
  return (
    <div className={s.welcome}>
        <div className={s.welcome_text}>
            <h3>Welcome To Pages!!!</h3>
            <h2>Your Books From The Best Writers</h2>
            <p>We believe that reading books are essential to a healthy culture. They are where authors can connect with readers.</p>
            <div className={s.btn_welcome}>
                <Button props={"Order Today"}/>
                <Button props={"Read Free Demo"} />
            </div>
            <div className={s.info_book}>
                <div>
                    <ul>
                        <li>Pages</li>
                    </ul>
                    <p>250pages</p>
                </div>
                <div>
                    <ul>
                        <li>Length:</li>
                    </ul>
                    <p>10 Hours</p>
                </div>
                <div>
                    <ul>
                        <li>Rating:</li>
                    </ul>
                    <p>4.5/5 (305 ratings)</p>
                </div>
            </div>
        </div>
        <div className={s.welcome_book}>
            <img src='./img/dark_light.png' alt='bast_book'/>
        </div>
    </div>
  )
}
