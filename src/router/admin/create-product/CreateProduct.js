import React, { useState } from 'react'
import "./CreateProducts.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"


// array (javascript) = collection (database)

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [urls, setUrls] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)

  const productsColRef = collection(db, "products")

  const CreateProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    let newProduct = {
      title,
      price: +price,
      urls: [urls],
      desc,
      category
    }
    await addDoc(productsColRef, newProduct)
      .then(res=> {
        console.log(res)
        setTitle("")
        setPrice("")
        setUrls("")
        setDesc("")
        setCategory("phone")
        setLoading(false)
        alert("Product were created")
      })
      .catch(err=> console.log(err))
  }

  return (
    <div className=''>
        <h2>CreateProduct</h2>
        <form onSubmit={CreateProduct} action="" className='create__form'>

          <input required type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='name' />

          <input required type="text" value={urls} onChange={e => setUrls(e.target.value)} placeholder='photo' />

          <input required type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder='price' />

          <input required type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder='information' />

          <select value={category} onChange={e=> setCategory(e.target.value)} name="" id="">
            {/* <option value="">Tanlang</option> */}
            <option value="phone">phone</option>
            <option value="tv">tv</option>
            <option value="laptop">laptop</option>
            <option value="Electric car">Electric car</option>
          </select>
          <button disabled={loading} type="submit">{loading ? "Loading..." : "Create Product"}</button>
        </form>
    </div>
  )
}

export default CreateProduct