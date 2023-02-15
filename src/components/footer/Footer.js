import React from 'react'
import "./Footer.css"
import {AiFillApple} from "react-icons/ai"
import {FaGooglePlay} from "react-icons/fa"
import {SiHuawei} from "react-icons/si"
import {CgMail} from "react-icons/cg"
import {GoLocation} from "react-icons/go"
import img from "../../assets/1.webp"
import apelsin from "../../assets/apelsin.png"
import click from "../../assets/click.jpg"
import humo from "../../assets/humo.png"
import payme from "../../assets/payme.png"
import paynet from "../../assets/paynet.png"
import uzcard from "../../assets/uzcard.png"
import { useLocation } from 'react-router-dom'




function Footer() {

  const {pathname} = useLocation()
  if (pathname.includes("admin")) {
    return <></>
  }

  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__container">
          <div className="footer__top">
            _
            <div className="footer__download">
              <h3>Bizning mobil ilovamiz AppGallery, App store va Google play-da</h3>
              <div className="footer_btns">
                <button className='footer__btn'><AiFillApple className='btn__app for_download'/> App Story</button>
                <button className='footer__btn'><FaGooglePlay className='btn__play for_download'/> Google Play</button>
                <button className='footer__btn'><SiHuawei className='btn__gallery for_download'/>  AppGallery</button>
              </div>
            </div>

            <div className="footer__right">
              <img src={img} alt="" />
            </div>
          </div>
          <div className='br'></div>
          <div className="footer__middle">

            <div className="footer__alpha">
              <h1 className='nav__logo'>gabriel</h1>
                <p>Qo'llab-quvvatlash raqami</p>
                <h2 className='call_number'>+998 (71) 202 20 21</h2>
                <p><GoLocation className='red addres'/> Qozitarnov, Toshkent</p>
              <p><CgMail className='addres'/> info@olcha.uz</p>
            </div>

            <div className="footer__information">
              <h1 className='nav__logo'>Ma`lumot</h1>
              <p>Biz haqimizda</p>
              <p>Bo'sh ish o'rinlari</p>
              <p>To'lovni qaytarish va tovarlarni almashtirish</p>
              <p>Muddatli to'lov shartlari</p>
              <p>Yordam</p>
              <p>Yetkazib berish</p>
            </div>
            
            <div className="footer__eco">
              <p>Eco friendly</p>
              <p>Bonus va aksiyalar</p>
              <p>To'lov va yetkazib berish</p>
              <p>gabriel da sotish</p>
              <p>Servis markazlari</p>
            </div>

            <div className="footer__payment">
              <img className="footer__svg" src={apelsin} alt="" />
              <img className="footer__svg" src={uzcard} alt="" />
              <img className="footer__svg" src={click} alt="" />
              <img className="footer__svg" src={payme} alt="" />
              <img className="footer__svg" src={humo} alt="" />
              <img className="footer__svg" src={paynet} alt="" />
            </div>
          </div>


          <div className='br'></div>


          <div className="footer__bottom">
            <p>© 2017-2022. LLC "Olcha store"</p>
            <p>Ommaviy Oferta</p>
            <p>Maxfiylik siyosati</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer