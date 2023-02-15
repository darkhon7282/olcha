import React from 'react'
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import { Route, Routes, NavLink } from 'react-router-dom'
import "./Admin.css"

function admin() {
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <ul>
          <li><NavLink to={'./'}>Home</NavLink></li>
          <li><NavLink to={'create-product'}>Create Product</NavLink></li>
          <li><NavLink to={'manage-product'}>Manage Product</NavLink></li>
        </ul>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/manage-product' element={<ManageProduct/>}/>
        </Routes>
      </div>
        
    </div>
  )
}

export default admin