import React from 'react'
import s from './Articles.module.sass'
import NameBlok from '../UI/NameBlok/NameBlok'

export default function Articles({articles}) {
  return (
    <div className={s.articles}>
        <NameBlok props={'Articles & Resources'}/>
        <div className={s.article_cards}>
        {articles.map(article => (
            <div className={s.article_card} key={article.id}>
                <img src={"/img/"+ article.img_article} alt="Article card" />
                <p className={s.name_card}>{article.name_article}</p>
                <p className={s.article_text}>{article.text_article}</p>
                <p className={s.article_data}>{article.data_article}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
