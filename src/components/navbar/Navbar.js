import React, {useState} from 'react'
import "./Navbar.css"
import {AiOutlineSearch, AiOutlineHeart, AiOutlineMenu} from "react-icons/ai"
import {BiBarChart} from "react-icons/bi"
import {SlBasket} from "react-icons/sl"
import {BsPerson} from "react-icons/bs"
import {FiX} from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { LOG_IN } from '../../context/action/actionType'





function Navbar() {
  const [ show, setShow ] = useState(false)
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(s=> s.auth)

  document.body.style.overflow = show ? "hidden" : "auto"
  const cart = useSelector(s => s.cart)

  const register = ()=>{
    if ( username === "gabriel" && password === "12345"  ) {
      dispatch({type: LOG_IN, payload: {username, password}})
      navigate("/admin")
    }else{
      console.log("error");
      setError(true)
    }
  }


  const defaultCase = ()=>{
    setShow(false)
    setUsername("")
    setPassword("")
    setError(false)
  }


  const checkAdmin = ()=>{
    if (auth) {
      return navigate("/admin")
    }
    setShow(true)
  }

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
            <div onClick={checkAdmin} className="nav__item">
              <BsPerson/>
              <p>Kirish</p>
            </div>
          </div>
          
          
          
        </div>
    </div>
    </div>
    

    {
      show ? <>
        <div onClick={defaultCase} className="nav__shadow"></div>
        <div className="nav__login">
          <FiX onClick={defaultCase} className='nav__close'/>
          <h1>Tizimga kirish yoki profil yaratish</h1>
          <span
            style={{opacity: error ? 1 : 0}}
            className='error'>username yoki parol xato</span>
          <p>Telefon raqami</p>
          <br />
          <input value={username} onChange={e => setUsername(e.target.value)} className='nav_input' type="text" placeholder='username' />
          <br />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password' />
          <br />
          <button onClick={register}>login</button>
        </div>
      </>:<></>
    }
    


    
    </>
    
  )
}

export default Navbar