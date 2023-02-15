import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Cart.css"
import crt from "../../assets/cart.png"
import CartItem from '../../components/cart-item/CartItem'
import { useSelector } from 'react-redux'
function Cart() {
  const cart = useSelector(s=> s.cart)
  return (
    <div className='container cart'>
      {
        cart.length === 0 ?
        <Empty url={crt} text="Savatchangiz bo'sh"/>
        :
        <CartItem korzinka={cart}/>
      } 
    </div>
  )
}

export default Cart