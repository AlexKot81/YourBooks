import React from 'react'
import s from './GetBook.module.sass'


export default function GetBook() {
  return (
    <div className={s.getbook_box}>
        <div className={s.getbook_text}>
            <h2 className={s.getbook_start}>Get Book Copy Today!</h2>
            <p className={s.description_getbook}>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
        </div>
        <img src="/img/get_book.png" alt="img"/>

    </div>
  )
}
