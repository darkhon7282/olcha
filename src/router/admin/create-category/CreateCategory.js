import React, { useState } from 'react'
import "./CreateCategory.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"


// array (javascript) = collection (database)

function CreateCategory() {
  const [text, setText] = useState("")
  const [pic, setPic] = useState("")
  const [loading, setLoading] = useState(false)

  const categoriesColRef = collection(db, "category")

  const CreateCategory = async (e) => {
    e.preventDefault()
    setLoading(true)
    let newCategory = {
      text,
      pic
    
      
    }
    await addDoc(categoriesColRef, newCategory)
      .then(res=> {
        console.log(res)
        setText("")
        setPic("")
        
        
        setLoading(false)
        alert("Product were created")
      })
      .catch(er=> console.log(er))
  }

  return (
    <div className=''>
        <h2>CreateCategory</h2>
        <form onSubmit={CreateCategory} action="" className='create__form'>

          <input required type="text" value={text} onChange={e => setText(e.target.value)} placeholder='name' />

          <input required type="text" value={pic} onChange={e => setPic(e.target.value)} placeholder='photo' />

          
          <button disabled={loading} type="submit">{loading ? "Loading..." : "Create Product"}</button>
        </form>
    </div>
  )
}

export default CreateCategory