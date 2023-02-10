import React from 'react'
import {PRODUCTS} from "../../static"
import { Link } from 'react-router-dom'
import "./Products.css"
import {FiShoppingCart, FiBarChart2} from "react-icons/fi"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_LIKE, REMOVE_LIKE } from '../../context/action/actionType'



function Products() {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)

  
  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }

  
  const cart = useSelector(s=> s.cart)
  console.log(cart)
  const addToCart = (item) => {
    console.log(item)
  }

  return (
    <div className='product container'>
      <div className="product__about">
        
        {
          PRODUCTS?.map((item, inx)=>
          <div  key={inx} className="pro__items">
            <div className='product__data' to={"/"}>
              <Link to={`/information/${item.id}`}><img src={item.urls[0]} alt="" /></Link>
              
              <p className='product__name'>{item.title}</p>
              <del className='product__delete'>{item?.del} so'm</del>
              <p className='product__price'>{item.price} so'm</p>
              
              <p className='product__credit'>{Math.floor((item.price + (item.price * 0.3)) / 12)} So'm x 12 oy</p>
              <button onClick={()=> addToCart(item)}><FiShoppingCart/> Buy now</button>
              <br />
            </div>
            <div className="product__reaction">
              <div  className='reaction_icon'>
                {
                  likes?.some(i => i.id === item.id) ? 
                  <AiFillHeart style={{color: "#DA002B"}} onClick={()=> dispatch({type:REMOVE_LIKE, payload: item.id})}/> : 
                  <AiOutlineHeart onClick={()=> addHeart(item)}/> 
                }
              </div>
              <FiBarChart2 className='reaction_icon'/>
            </div>
          </div>)
            
        }
        
      </div>
      
        
    </div>
  )
}

export default Products