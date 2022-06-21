import React from 'react'
import s from './AuthorsBook.module.sass'

export default function AuthorsBook() {
  return (
    <div className={s.authors_book}>
            <h2>The Author&prime;s Book</h2>
            <div className={s.books_info}>
                <div className={s.card_book}>
                    <div className={s.img_book}>
                        <img src='/img/atomic_one.jpg' alt='Atomic One'/>
                    </div>
                    <div className={s.book_info}>
                        <h3 className={s.book_name}>Atomic One&prime;s</h3>
                        <p className={s.price}>$ 13.84 USD</p>
                        <p className={s.description}>As the book contains theoretical content as well as solved questions.</p>
                        <p className={s.type_book}>Printed Book</p>
                    </div>
                </div>
                <div className={s.card_book}>
                <div className={s.img_book}>
                        <img src='/img/dark_light.png' alt='Dark Light'/>
                    </div>
                    <div className={s.book_info}>
                        <h3 className={s.book_name}>The Dark Light</h3>
                        <p className={s.price}>$ 86.11 USD</p>
                        <p className={s.description}>As the book contains theoretical content as well as solved questions.</p>
                        <p className={s.type_book}>Printed Book</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
