import React from 'react'
import s from './AboutAuthor.module.sass'

export default function AboutAuthor() {
  return (
    <div className={s.about_authors}>
        <div className={s.img_authors}>
            <div className={s.border_foto}>
                <img src='/img/author.png' alt='Authors' className={s.photo_authors}/> 
            </div> 
        </div>
        <div className={s.info_authors}>
            <h2>About The Author</h2>
            <p className={s.text_authors}>We believe that bookstores are essential to a healthy culture. They&prime;re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
            <div className={s.data_author}>
                <div>
                    <p className={s.like_authors}>02</p>
                    <p className={s.like_name}>Books Published</p>
                </div>
                <div>
                    <p className={s.like_authors}>4.5</p>
                    <p className={s.like_name}>User Reviews</p>
                </div>
                <div>
                    <p className={s.like_authors}>04</p>
                    <p className={s.like_name}>Best Seller Awards</p>
                </div>
            </div>
            <div className={s.contact_author} >
                         <img src='./img/qr-code.png' alt='qr_cod'/>
                    <div className={s.contact_data}>
                        <p className={s.name_author}>John Abraham , Ph.d</p>
                        <p className={s.email_author}>Mail: johnabraham@gmail.com</p>
                        <p className={s.phone_author}>Phone: (+2) 123 545 9000</p>
                    </div>
                </div>
        </div>
    </div>
  )
}
