import React from 'react'
import "./New.css"

import phone from "../../assets/newpro/phone.png"
import ayol from "../../assets/newpro/ayol.png"
import avto from "../../assets/newpro/avto.png"
import forman from "../../assets/newpro/forman.png"
import tv from "../../assets/newpro/tv.png"
import bolalar from "../../assets/newpro/bolalar.png"
import moyka from "../../assets/newpro/moyka.png"
import kosmetika from "../../assets/newpro/kosmetika.png"
import gamer from "../../assets/newpro/gamer.png"
import kidclothes from "../../assets/newpro/kidclothes.png"
import fara from "../../assets/newpro/fara.png"
import makeup from "../../assets/newpro/makeup.png"
import laptop from "../../assets/newpro/laptop.png"
import arava from "../../assets/newpro/arava.png"
import rul from "../../assets/newpro/rul.png"
import hair from "../../assets/newpro/hair.png"

function New() {
const NEW_Products = [
    {
        pic: phone,
        text: "Smartfon, telefon, gadjet",
        background: "linear-gradient(45deg, #092264, #2696C8)"
    },
    {
        pic: ayol,
        text: "Ayollar kiyimlari"
    },
    {
        pic: avto,
        text: "Avtomobillar uchun diskalar"
    },
    {
        pic: forman,
        text: "Erkaklar uchun"
    },
    {
        pic: tv,
        text: "Televizor, foto-video va audio"
    },
    {
        pic: bolalar,
        text: "Bolalar uchun stol o'yinlari"
    },
    {
        pic: moyka,
        text: "Minimoyka"
    },
    {
        pic: kosmetika,
        text: "Kosmetika mahsulotlari"
    },
    {
        pic: gamer,
        text: "Geymerlar uchun"
    },
    {
        pic: kidclothes,
        text: "Bolalar kiyimlari"
    },
    {
        pic: fara,
        text: "Fara"
    },
    {
        pic: makeup,
        text: "Pardoz jihozlari"
    },
    {
        pic: laptop,
        text: "Noutbuk, printer, kompyuterlar"
    },
    {
        pic: arava,
        text: "Bolalar aravachalari"
    },
    {
        pic: rul,
        text: "Avtomobillar uchun rullar"
    },
    {
        pic: hair,
        text: "Soch parvarishi uchun"
    }
]

  return (
    <div className='new__products'>
        <h1>Kategoriyadagi yangi mahsulotlar</h1>
            <div className="new__category_front">
                {
                    NEW_Products?.map((item, inx)=>
                        <div key={inx} className="new__category">
                            <img src={item.pic} alt="" />
                            <p>{item.text}</p>
                        </div>
                    )
                }
            </div>
        
    </div>
  )
}

export default New