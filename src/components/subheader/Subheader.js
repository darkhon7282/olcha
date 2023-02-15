import React from 'react'
import "./Subheader.css"
import { useLocation } from 'react-router-dom'

function Subheader() {

  const {pathname} = useLocation()
  if (pathname.includes("admin")) {
    return <></>
  }

  return (
    <div className='sub__header'>
        <div className="container">
          <div className="sub__container">
            <div>
              <button className='btn sub_btn btn_credit'>0% mudatli tolov</button>
              <button className='btn sub_btn'>Chegirmalar</button>
              
              <span>Sayt xaritasi</span>
            </div>
            <div className='phone_number'>
              <a href="tel:+998938155857">+998 93 815 58 57</a>
              <button className='btn sub_btn'>Gabrielda sotib oling</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Subheader