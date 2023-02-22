import React, { useEffect, useState } from 'react'
import "./New.css"




import { db } from "../../server"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"

function New({admin}) {
    const[refresh, setRefresh] = useState(false)
    
    const [data, setNewData] = useState([])

    const categoriesColRef = collection(db, "category")


    useEffect(()=>{
        const getCategories = async () => {
            const categories = await getDocs(categoriesColRef)
            setNewData(categories.docs.map((po)=> ({...po.data(), id: po.id })))
        }
        getCategories()
    }, [refresh])

  console.log(data);


  const deleteNew = async (id)=>{
    await deleteDoc(doc(db, "category", id))
      .then(res=> {
        console.log(res)
        setRefresh(!refresh)
      })
      .catch(res=> console.log(res))
  }




  return (
    <div className='new__products'>
        <h1>Kategoriyadagi yangi mahsulotlar</h1>
            <div className="new__category_front">
                {
                    data?.map((item, inx)=>
                        <div key={inx} className="new__category">
                            <img src={item.pic} alt="" />
                            <p>{item.text}</p>
                            {
                                admin ? 
                                <button className='new__new' onClick={()=> deleteNew(item.id)}>delete</button>
                                :
                                <></>
                            }
                        </div>
                    )
                }
            </div>
        
    </div>
  )
}

export default New