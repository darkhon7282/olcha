import React from 'react'
import {PRODUCTS} from "../../static"
import { Link } from 'react-router-dom'
import "./Products.css"
import {FiShoppingCart, FiBarChart2} from "react-icons/fi"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_LIKE } from '../../context/action/actionType'

// import iphone14pm from "../../assets/product__advice/14promax.jpeg"
// import lenovo from "../../assets/product__advice/lenovo.jpeg"
// import note11 from "../../assets/product__advice/note11.jpeg"
// import a13 from "../../assets/product__advice/a13.jpeg"
// import a33 from "../../assets/product__advice/a33.jpeg"
// import pixel from "../../assets/product__advice/pixel.jpeg"
// import lenovov15 from "../../assets/product__advice/lenovov15.jpeg"
// import note11pro from "../../assets/product__advice/note11pro.jpeg"
// import nokia110 from "../../assets/product__advice/nokia110.jpeg"
// import a53 from "../../assets/product__advice/a53.jpeg"

function Products() {
  const dispatch = useDispatch()

  // const PRODUCT__advice = [
  //   {
  //     photo: iphone14pm,
  //     name: "Apple iPhone 14 Pro Max",
  //     del: 0,
  //     price: 17_689_000
  //   },
  //   {
  //     photo: lenovo,
  //     name: "Noutbuk Lenovo IdeaPad 3 15IIL05 i3-1005G1",
  //     del: 0,
  //     price: 4_559_000
  //   },
  //   {
  //     photo: note11,
  //     name: "Smartfon Xiaomi Redmi Note 11 Pro 8/128 GB",
  //     del: 0,
  //     price: 3_391_000
  //   },
  //   {
  //     photo: a13,
  //     name: "Samsung Galaxy A13 Qora 4/128 Gb",
  //     del: 0,
  //     price: 2_229_000
  //   },
  //   {
  //     photo: a33,
  //     name: "Samsung Galaxy A33 Qora 6/128 Gb",
  //     del: 2_909_500,
  //     price: 3_500_000
  //   },
  //   {
  //     photo: pixel,
  //     name: 'Monitor Pixel PXG24FHD 24" Curved Gaming',
  //     del: 0,
  //     price: 2_575_000
  //   },
  //   {
  //     photo: lenovov15,
  //     name: 'Noutbuk Lenovo V15 i3-10110U 4/1 TB HDD 15.6"',
  //     del: 0,
  //     price: 4_137_000
  //   },
  //   {
  //     photo: note11pro,
  //     name: "Smartfon Xiaomi Redmi Note 11 6/128 GB Grafit",
  //     del: 0,
  //     price: 2_630_000
  //   },
  //   {
  //     photo: nokia110,
  //     name: "Nokia 110 Dual Sim, Black",
  //     del: 0,
  //     price: 589_000
  //   },
  //   {
  //     photo: a53,
  //     name: "Samsung Galaxy A53 Qora 6/128 Gb",
  //     del: 0,
  //     price: 4_087_000
  //   }
  // ]
  const likes = useSelector(s=>s.heart)
  console.log(likes)
  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
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
              <button><FiShoppingCart/> Buy now</button>
              <br />
            </div>
            <div className="product__reaction">
              <div onClick={()=> addHeart(item)} className='reaction_icon'>
                {
                  likes?.some(i => i.id === item.id) ? <AiFillHeart/> : <AiOutlineHeart/> 
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