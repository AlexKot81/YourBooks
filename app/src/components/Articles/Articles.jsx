import React from 'react'
import s from './Articles.module.sass'
import NameBlok from '../UI/NameBlok/NameBlok'

export default function Articles() {
  return (
    <div className={s.articles}>
        <NameBlok props={'Articles & Resources'}/>
        <div className={s.article_cards}>
            <div className={s.article_card}>
                <img src="/img/article_1.png" alt="Article card" />
                <p className={s.name_card}>Significant reading has more info number</p>
                <p className={s.article_text}>Override the digital divide with additional clickthroughs from DevOps for real-time schemas.</p>
                <p className={s.article_data}>October 6, 2021</p>
            </div>
            <div className={s.article_card}>
                <img src="/img/article_1.png" alt="Article card" />
                <p className={s.name_card}>Significant reading has more info number</p>
                <p className={s.article_text}>Override the digital divide with additional clickthroughs from DevOps for real-time schemas.</p>
                <p className={s.article_data}>October 6, 2021</p>
            </div>
            <div className={s.article_card}>
                <img src="/img/article_1.png" alt="Article card" />
                <p className={s.name_card}>Significant reading has more info number</p>
                <p className={s.article_text}>Override the digital divide with additional clickthroughs from DevOps for real-time schemas.</p>
                <p className={s.article_data}>October 6, 2021</p>
            </div>
        </div>
    </div>
  )
}
