import React, {useState} from 'react'
import "./Navbar.css"
import {AiOutlineSearch, AiOutlineHeart, AiOutlineMenu} from "react-icons/ai"
import {BiBarChart} from "react-icons/bi"
import {SlBasket} from "react-icons/sl"
import {BsPerson} from "react-icons/bs"
import {FiX} from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'



const NAVBAR_DATA = [
  {
    text: "Taqqoslash",
    icon: <BiBarChart/>
  },
  {
    text: "Sevimlilar",
    icon: <AiOutlineHeart/>
  },
  {
    text: "Savatcha",
    icon: <SlBasket/>
  },
  {
    text: "Kirish",
    icon: <BsPerson/>
  }
]

function Navbar() {
  const [ show, setShow ] = useState(false)

  document.body.style.overflow = show ? "hidden" : "auto"
  const cart = useSelector(s => s.cart)

  const {pathname} = useLocation()
  if (pathname.includes("admin")) {
    return <></>
  }
  
  return (
    <>
    <div className="nav__container">
    <div className='container'>
        <div className='navbar'>
          <Link to={"/"}
          // contentEditable={true}
           className='nav__logo'>gabriel</Link>
          <button className='btn nav_btn nav_katalog'>
            <AiOutlineMenu className='nav__icon'/>
            <span>Katalog</span>
          </button>
          <div className="nav__search">
            <input type="text" placeholder='Qidirish...'/>
            <button><AiOutlineSearch className='nav__icon'/></button>
          </div>
          {/* <button className='btn nav_btn next_to_search'>
            <BiBarChart className='nav__icon'/>
            <h4>Taqqoslash</h4>
          </button>
          <button className='btn nav_btn next_to_search'>
            <AiOutlineHeart className='nav__icon'/>
            <h4>Sevimlilar</h4>
          </button>
          <button className='btn nav_btn next_to_search'>
            <SlBasket className='nav__icon'/>
            <h4>Savatcha</h4>
          </button>
          <button className='btn nav_btn next_to_search'>
            <BsPerson className='nav__icon'/>
            <h4>Kirish</h4>
          </button> */}
          <div className="nav__items">
            <Link to={"/"} className="nav__item">
              <BiBarChart/>
              <p>Taqqoslash</p>
            </Link>
            <Link to={"/like"} className="nav__item">
              <AiOutlineHeart/>
              <p>Sevimlilar</p>
            </Link>
            <Link to={"/cart"} className="nav__item">
              <SlBasket/>
              <p>Savatcha</p>
              <span className='nav__circle'>{cart.length}</span>
            </Link>
            <div onClick={()=> setShow(true)} className="nav__item">
              <BsPerson/>
              <p>Kirish</p>
            </div>
          </div>
          
          
          
        </div>
    </div>
    </div>
    

    {
      show ? <>
        <div onClick={()=> setShow(false)} className="nav__shadow"></div>
        <div className="nav__login">
          <FiX onClick={()=> setShow(false)} className='nav__close'/>
          <h1>Tizimga kirish yoki profil yaratish</h1>
          <p>Telefon raqami</p>
          <input className='nav_input' type="tel" name="" id="" />
        </div>
      </>:<></>
    }
    


    
    </>
    
  )
}

export default Navbar