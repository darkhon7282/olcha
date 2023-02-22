import React from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div>
      <Link className='category__a' to={"/admin/create-product"}>create ptoduct</Link>
    </div>
  )
}

export default Category