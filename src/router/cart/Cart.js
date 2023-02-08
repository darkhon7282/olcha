import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Cart.css"
import cart from "../../assets/cart.png"
function Cart() {
  return (
    <div className='container cart'>
        <Empty url={cart} text="Savatchangiz bo'sh"/>
    </div>
  )
}

export default Cart