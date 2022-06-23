import React from 'react'
import NameBlok from '../UI/NameBlok/NameBlok'
import s from './Trusted.module.sass'

export default function Trusted() {
  return (
    <div className={s.trusted_box}>
        <NameBlok props={"Trusted By The Best"}/>
        <div className={s.trust_company}>
            <div className={s.trust_card}>
                <img src='/img/amazon_logo.png' alt='Logo trust' className={s.trust_logo}/>
                <p className={s.trust_name}>Amazen Corp.</p>
                <p className={s.trust_context}>They has been helping readers, music lovers, and videophiles find quality material.</p>
            </div>
            <div className={s.trust_card}>
                <img src='/img/amazon_logo.png' alt='Logo trust' className={s.trust_logo}/>
                <p className={s.trust_name}>Amazen Corp.</p>
                <p className={s.trust_context}>They has been helping readers, music lovers, and videophiles find quality material.</p>
            </div>
            <div className={s.trust_card}>
                <img src='/img/amazon_logo.png' alt='Logo trust' className={s.trust_logo}/>
                <p className={s.trust_name}>Amazen Corp.</p>
                <p className={s.trust_context}>They has been helping readers, music lovers, and videophiles find quality material.</p>
            </div>
            <div className={s.trust_card}>
                <img src='/img/amazon_logo.png' alt='Logo trust' className={s.trust_logo}/>
                <p className={s.trust_name}>Amazen Corp.</p>
                <p className={s.trust_context}>They has been helping readers, music lovers, and videophiles find quality material.</p>
            </div>
        </div>
    </div>
  )
}
