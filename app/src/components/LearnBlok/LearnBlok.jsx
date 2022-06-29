import React from 'react'
import NameBlok from '../UI/NameBlok/NameBlok'
import s from './LearnBlok.module.sass'

export default function LearnBlok({scills}) {
  return (
    <div className={s.learn_blok}>
      <NameBlok props={"What Will You Learn?"}/>
      <div className={s.text_foto}>
        <div className={s.learn_cards}>
        {scills.map(scill => (
            <div className={s.card} key={scill.id}>
                <div className={s.card_num}>{"0"+scill.id}</div>
                <p className={s.card_text}>{scill.skills_text}</p>
            </div>
            ))}
        </div>
        <div className={s.pos_img}>
          <div>
            <img src='/img/learn_img.png' alt='pic_fot' className={s.pic_foto}/>
          </div>
        </div>
      </div>
    </div>
  )
}
