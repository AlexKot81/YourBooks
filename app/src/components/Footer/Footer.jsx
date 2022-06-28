import React from 'react'
import s from './Footer.module.sass'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../UI/Logo/Logo'
import BtnIcon from '../UI/BtnIcon/BtnIcon'


export default function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.footer_icon}>
            <Logo />
            <BtnIcon style_foot={{paddingTop: "50px"}}/>
        </div>
        <div className={s.footer_explore}>
          <h4>Explore</h4>
          <ul className={s.ul_explore}>
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
            <li>Our Store</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={s.footer_explore}>
        <h4>Utility Pages</h4>
          <ul className={s.ul_explore}>
            <li>Style Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licenses</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div className={s.footer_contact}>
        <h4>Keep in Touch</h4>
          <table className={s.tab_contact}>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>24A Kingston St, Los Vegas <br></br>NC 28202, USA.</td>
              </tr>
              <tr>
                <td>Mail:</td>
                <td>support@pages.com</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>(+22) 123 - 4567 - 900</td>
              </tr>
              </tbody>
          </table>
        </div>
    </div>
  )
}
