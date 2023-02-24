import React, { useState } from 'react'
import "../../router/like/Like.css"
import "./CartItem.css"
import { ADD_TO_CART, REMOVE_CART } from '../../context/action/actionType'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Empty from '../../components/empty/Empty'

import empty from "../../assets/empty.png"
import { BiCircle } from "react-icons/bi"


function CartItem({korzinka}) {
  const [ name, setName ] = useState("")
  const [ tel, settel ] = useState("")
  const [ address, setaddress ] = useState("")
  const [ desc, setdesc ] = useState("")



    const dispatch = useDispatch()
    const addToCart = (item) => {
        let index = korzinka.findIndex(i=> i.id === item.id)
        if ( index < 0 ) {
          return dispatch({type: ADD_TO_CART, payload: [...korzinka, {...item, qty: 1}]})
        }
        let newCart = korzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
        dispatch( {type: ADD_TO_CART, payload:newCart } )
      }
    const minusToCart = (item) => {
        let index = korzinka.findIndex(i=> i.id === item.id)
        if ( index < 0 ) {
          return dispatch({type: ADD_TO_CART, payload: [...korzinka, {...item, qty: 1}]})
        }
        let newCart = korzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty - 1} : pro)
        dispatch( {type: ADD_TO_CART, payload:newCart } )
      }
      const like = useSelector(s => s.cart)

      const order = ()=>{
        console.log( { name, tel, address, desc, like } );
      }
  
  return (
    
    <div className='container like'>
    {
      like.length === 0 ?
      <Empty url={empty} text="Savatchangiz bo'sh"/>
      :
      <div className="">
        <div className="like__text">
          <h1 className='like_price'>Jami narx: {korzinka.reduce((a,b) => a + (b.price * b.qty), 0).brm()} so'm</h1>
          <div className="your__information">

            <div className="info__text">
              <h1>Sizning ma'lumotlaringiz</h1>
              <button>Bekor qilish</button>
            </div>

            <div className="your_info">
              <input value={name} onChange={e=> setName(e.target.value)} type="text" placeholder='name' />
              <input value={tel} onChange={e=> settel(e.target.value)} type="text" placeholder='tell' />
            </div>
          </div>

          
          <div className="your__address">
            <h1>Yetkazib berish usuli</h1>
            <button>Kurer orqali yetkazib berish</button>
            <input value={address} onChange={e=> setaddress(e.target.value)} type="text" placeholder='address' />
            <h3>Yetkazib berish turi</h3>
          </div>

          <div className="your_order_type">
            <h1>Buyurtma turi</h1>
            <button className='your_payment_full'><BiCircle className='tick_order tick_1'/> To'liq to'lash</button>
            <button className='your_payment_credit'><BiCircle className='tick_order'/> Bo'lib to'lash</button>
          </div>

          <div className="your__textarea">
            <h2>Buyurtma uchun izoh</h2>
            <textarea value={desc} onChange={e=> setdesc(e.target.value)} placeholder="ma'lumot" id="" cols="30" rows="10"></textarea>
          </div>

          <div className="your__order">
            <button onClick={order}>Buyurtma berish</button>
            <p>"Buyurtma berish" tugmasi bosish orqali <a href="">ommaviy taklif shartnomasiga</a> roziman</p>
          </div>
          
        </div>



      <div className="like__full">
        <div className="favourites">
          
        {
            korzinka?.map((item, ind)=><div key={ind} className="for__hr">
              <div className="like__product">
                <Link to={`/information/${item.id}`}><img src={item.urls[0]} alt="" /></Link>
                  
                  <div className="like__name">
                  <Link to={`/information/${item.id}`}><h3>{item?.title}</h3></Link>
                    <div className="like__brand">
                      <h4>Brand</h4>  
                    </div>
                  </div>
                  <div className="like__cost">
                    <button className='minus' disabled={ item?.qty <= 1 } onClick={()=> minusToCart(item)}>-</button>
                    <span>{item?.qty}</span>
                    <button className='plus' onClick={()=> addToCart(item)}>+</button>
                    <h4>{item?.price.brm()} so'm</h4>
                  </div>
                  <div className="like__download">
                    <button className='like_btn1'>Sevimlilarga qo'shish</button>
                    <button onClick={ ()=> dispatch({type: REMOVE_CART, payload: item.id}) } className='like_btn2'>O'chirish</button>
                  </div>
                </div>
                <hr />
            </div> 
                )
          }
            </div>
        </div>
          
      </div>
      
      
      
    }
      
  </div>
  )
}

export default CartItem