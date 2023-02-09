import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static';
import "./SingleRoute.css"
import {BiCheckShield} from "react-icons/bi"
import {HiOutlineExclamationCircle} from "react-icons/hi"
import {TbTruckDelivery} from "react-icons/tb"
import {SlBasket} from "react-icons/sl"

function SingleRoute() {
    const params = useParams()
    const oneItem = PRODUCTS?.find(el => el.id === params.id)
    console.log(oneItem);
    
    if(!oneItem){
        return <div> <h2>Ma'lumot topilmadi</h2> </div>        
    }
    
  return (
    <div className='container'>
        
        <h1 className='product_name_info'>{oneItem?.title}</h1>
        <div className="product__overall">
            <div className="product_pic_info">
                <div className="product__pic">
                    <img src={oneItem?.urls[0]} alt="" />
                </div>
                <div className="product__info">
                    {
                        oneItem?.desc?.map((info, ind)=><p key={ind}>{info}</p>)
                    }
                    <h5>Barcha xususiyatlarini ko'rish</h5>
                    <span><BiCheckShield className='guaranty'/> *** oy kafolat</span>
                    <h5 className='product__brends'>*** brendining barcha tovarlari</h5>
                </div>
            </div>
            <div className="product__sell">
                <div className="product__add">
                    <h2>{oneItem?.price} so'm</h2>
                    <p className='delivery_info'>Yetkazib berish to'g'risida ma'lumot: <HiOutlineExclamationCircle className='Exclamation'/></p>
                    <h3><TbTruckDelivery className='TruckDelivery'/> Standart yetkazib berish</h3>
                    <p className='delivery_time'>Manzilga qarab *** soatdan *** ish kunigacha yetkazib beriladi</p>
                    <hr />
                    <button className='product_add_bascet'><SlBasket className='product__bascet'/> Savatchaga qo'shish</button>
                    <button className='product_buy'>Bir bosishda sotib olish</button>
                </div>
                <div className="product__add ">
                    <p className='delivery_info'>Bo'lib to'lash</p>
                    <h2>{oneItem?.price} so'm / 12 oy</h2>
                    <span className='bank_icon'>gabriel</span>
                    <span className='bank_icon'>BANK</span>
                    <hr />
                    <button className='product_add_bascet basket__red'>Bo'lib to'lash</button>
                    
                </div>
            </div>
           
        </div>
   
    </div>
  )
}

export default SingleRoute