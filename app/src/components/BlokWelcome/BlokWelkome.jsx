import React from 'react'
import Button from '../UI/Button'
import s from './BlokWelkome.module.sass'

export default function BlokWelkome() {
  return (
    <div className={s.welcome}>
        <div className={s.welcome_text}>
            <p>Welcome To Pages!!!</p>
            <h2>Your Books From The Best Writers</h2>
            <p>We believe that reading books are essential to a healthy culture. They are where authors can connect with readers.</p>
            <div>
                <Button />
                <a href="#">Read Free Demo</a>
            </div>
            <div>
                <div>
                    <ul>
                        <li>Pages</li>
                    </ul>
                    <p>250pages</p>
                </div>
                <div>
                    <ul>
                        <li>Pages</li>
                    </ul>
                    <p>250pages</p>
                </div>
                <div>
                    <ul>
                        <li>Pages</li>
                    </ul>
                    <p>250pages</p>
                </div>
            </div>
        </div>
        <div className={s.welcome_book}>
            <img src='wel_book.png' alt='bast_book'/>
        </div>
    </div>
  )
}
