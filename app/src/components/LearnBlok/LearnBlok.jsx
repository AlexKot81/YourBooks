import React from 'react'
import NameBlok from '../UI/NameBlok/NameBlok'
import s from './LearnBlok.module.sass'

export default function LearnBlok() {
  return (
    <div className={s.learn_blok}>
      <NameBlok props={"What Will You Learn?"}/>
      <div className={s.text_foto}>
        <div className={s.learn_cards}>
            <div className={s.card}>
                <div className={s.card_num}>01</div>
                <p className={s.card_text}>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
            </div>
            <div className={s.card}>
                <div className={s.card_num}>02</div>
                <p className={s.card_text}>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
            </div>
            <div className={s.card}>
                <div className={s.card_num}>03</div>
                <p className={s.card_text}>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
            </div>
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
