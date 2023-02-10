import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Like.css"
import empty from "../../assets/empty.png"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { REMOVE_LIKE } from '../../context/action/actionType'

function Like() {
  const like = useSelector(s => s.heart)
  const dispatch = useDispatch()
  return (
    <div className='container like'>
      {
        like.length === 0 ?
        <Empty url={empty} text="Sevimli mahsulotlar yo'q"/>
        :
        <div className="">
          <div className="like__text">
            <h1>Sevimlilar</h1>
          </div>
          <div className="like__full">
          {
              like?.map((item, inx)=> <div key={inx} className="favourites">
                
                  <div className="like__product">
                  <Link to={`/information/${item.id}`}><img src={item.urls[0]} alt="" /></Link>
                    
                    <div className="like__name">
                      <h3>{item?.title}</h3>
                      <div className="like__brand">
                        <h4>Brand</h4>
                      </div>
                    </div>
                    <div className="like__cost">
                      <del>{item?.del} so'm</del>
                      <h4>{item?.price} so'm</h4>
                    </div>
                    <div className="like__download">
                      <button className='like_btn1'>Savatchaga qo'shish</button>
                      <button onClick={ ()=> dispatch({type: REMOVE_LIKE, payload: item.id}) } className='like_btn2'>O'chirish</button>
                    </div>
                  </div>
                </div>)
            }
          </div>
            
        </div>
        
        
        
      }
        
    </div>

  )
}

export default Like