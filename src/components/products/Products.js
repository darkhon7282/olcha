import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Products.css"
import {FiShoppingCart, FiBarChart2} from "react-icons/fi"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_LIKE, REMOVE_LIKE, ADD_TO_CART } from '../../context/action/actionType'
import { db } from "../../server"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"





function Products(admin) {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)
  const cart = useSelector(s=> s.cart)
  const[refresh, setRefresh] = useState(false)

  
  const [data, setData] = useState([])

  const productsColRef = collection(db, "products")


  useEffect(()=>{
    const getProducts = async () => {
      const products = await getDocs(productsColRef)
      setData(products.docs.map((pro)=> ({ ...pro.data(), id: pro.id })))
    }
    getProducts()
  }, [refresh])

  console.log(data);

  
  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }

  

  const addToCart = (item) => {
    let index = cart.findIndex(i=> i.id === item.id)
    if ( index < 0 ) {
      return dispatch({type: ADD_TO_CART, payload: [...cart, {...item, qty: 1}]})
    }
    let newCart = cart.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
    dispatch( {type: ADD_TO_CART, payload:newCart } )
  }

  const deleteProduct = async (id)=>{
    await deleteDoc(doc(db, "products", id))
      .then(res=> {
        console.log(res)
        setRefresh(!refresh)
      })
      .catch(res=> console.log(res))
  }


  
  


  

  return (
    <div className={`product ${admin ? "" : "container"}`}>
      <div className="product__about">
        
        {
          data?.map((item, inx)=>
          <div  key={inx} className="pro__items">
            <div className='product__data' to={"/"}>
              <Link to={`/information/${item.id}`}><img src={item.urls[0]} alt="" /></Link>
              
              <p className='product__name'>{item.title.length > 30 ? item.title.slice(0, 30)+"..." : item.title}</p>
              <p className='product__price'>{item.price.brm()} so'm</p>
              
              <p className='product__credit'>{Math.floor((item.price + (item.price * 0.3)) / 12)} So'm x 12 oy</p>
              {
                admin ?
                <button onClick={()=> deleteProduct(item.id)}>Delete</button>
                :
                <button onClick={()=> addToCart(item)}><FiShoppingCart/> Buy now</button>
                
                
              }
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