import React from 'react'
import NameBlok from '../UI/NameBlok/NameBlok'
import s from './Trusted.module.sass'

export default function Trusted({company}) {
  return (
    <div className={s.trusted_box}>
        <NameBlok props={"Trusted By The Best"}/>
        <div className={s.trust_company}>
        {company.map(company => (
            <div className={s.trust_card} key={company.id}>
                <img src={"/img/"+ company.img_comp} alt='Logo trust' className={s.trust_logo}/>
                <p className={s.trust_name}>{company.name_comp}</p>
                <p className={s.trust_context}>{company.text}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
