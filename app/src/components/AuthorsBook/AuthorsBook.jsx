import React from 'react'
import NameBlok from '../UI/NameBlok/NameBlok'
import s from './AuthorsBook.module.sass'

export default function AuthorsBook({books}) {
  return (
    <div className={s.authors_book}>
        <NameBlok props={"The Author's Book"}/>
            <div className={s.books_info}>
            {books.map(book => (
                <div className={s.card_book} key={book.id}>
                    <div className={s.img_book}>
                        <img src={"./img/"+book.img_book} alt='Atomic One'/>
                    </div>
                    <div className={s.book_info}>
                        <h3 className={s.book_name}>{book.name_book}</h3>
                        <p className={s.price}>{"$ "+ book.price_book +" "+ book.currency}</p>
                        <p className={s.description}>{book.description}</p>
                        <p className={s.type_book}>{book.type_book}</p>
                    </div>
                </div>
                ))}
            </div>
    </div>
  )
}
