import React from 'react'
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import CreateCategory from './create-category/CreateCategory'
import { Route, Routes, NavLink } from 'react-router-dom'
import "./Admin.css"
import { useDispatch } from 'react-redux'
import { AiTwotoneHome, AiOutlineLineChart } from "react-icons/ai"
import { IoIosCreate } from "react-icons/io"
import { RiProductHuntLine, RiRadioButtonLine } from "react-icons/ri"
import { TbComponents } from "react-icons/tb"
import { FaAngleLeft } from "react-icons/fa"
import administrator from "../../assets/admin/admin.jpg"
import ManageCategory from './manage-category/ManageCategory'
import { LOG_OUT } from '../../context/action/actionType'

function Admin() {
  const dispatch = useDispatch()

  





  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <NavLink to={"/"}><FaAngleLeft/> Go Back</NavLink>
        <hr />
        <div className="administrator">
          <img src={administrator} alt="" />
          <div className="administrator__about">
            <h4>Gabriel</h4>
            <h5>Administrator</h5>
            <span><RiRadioButtonLine className='internet'/> Online</span>
          </div>
        </div>
        <hr />
        <input placeholder='Search...' type="search" name="" id="" />
        <hr />
        <ul className='sidebar__menu'>
          <li><NavLink to={'./'}><AiTwotoneHome/> Home</NavLink></li>
          <li><NavLink to={'create-product'}><IoIosCreate/> Create Product</NavLink></li>
          <li><NavLink to={'manage-product'}><RiProductHuntLine/> Manage Product</NavLink></li>
          <li><NavLink to={'create-category'}><IoIosCreate/> Create category</NavLink></li>
          <li><NavLink to={'components'}><TbComponents/> Components</NavLink></li>
          <li><NavLink to={'charts'}><AiOutlineLineChart/> Charts</NavLink></li>
          <li><NavLink to={'manage-category'}><AiOutlineLineChart/> Manage Category</NavLink></li>

        </ul>

        <button onClick={()=> dispatch({type: LOG_OUT})}>log out</button>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/manage-product' element={<ManageProduct/>}/>
          <Route path='/create-category' element={<CreateCategory/>}/>
          <Route path='/manage-category' element={<ManageCategory/>}/>
        </Routes>
      </div>
        
    </div>
  )
}

export default Admin