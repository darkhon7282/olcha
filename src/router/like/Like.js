import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Like.css"
import empty from "../../assets/empty.png"
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { REMOVE_LIKE, ADD_TO_CART } from '../../context/action/actionType'

function Like() {
  const like = useSelector(s => s.heart)
  const dispatch = useDispatch()
  const cart = useSelector(s=> s.cart)
  console.log(cart)

  const addToCart = (item) => {
    let index = cart.findIndex(i=> i.id === item.id)
    if ( index < 0 ) {
      return dispatch({type: ADD_TO_CART, payload: [...cart, {...item, qty: 1}]})
    }
    let newCart = cart.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
    dispatch( {type: ADD_TO_CART, payload:newCart } )
  }
  return (
    <div className='container like'>
      {
        like.length === 0 ?
        <Empty url={empty} text="Sevimli mahsulotlar yo'q"/>
        :
        <div className="">
          <div className="like__text">
            <h1>Sevimlilar</h1>
          </div>
          <div className="like__full">
          {
              like?.map((item, inx)=> <div key={inx} className="favourites">
                
                  <div className="like__product">
                  <Link to={`/information/${item.id}`}><img src={item.urls[0]} alt="" /></Link>
                    
                    <div className="like__name">
                      <Link to={`/information/${item.id}`}><h3>{item?.title}</h3></Link>
                      
                      <div className="like__brand">
                        <h4>Brand</h4>
                      </div>
                    </div>
                    <div className="like__cost">
                      <del>{item?.del} so'm</del>
                      <h4>{item?.price.brm()} so'm</h4>
                    </div>
                    <div className="like__download">
                      <button onClick={()=> addToCart(item)} className='like_btn1'>Savatchaga qo'shish</button>
                      <button onClick={ ()=> dispatch({type: REMOVE_LIKE, payload: item.id}) } className='like_btn2'>O'chirish</button>
                    </div>
                  </div>
                </div>)
            }
          </div>
            
        </div>
        
        
        
      }
        
    </div>

  )
}

export default Like