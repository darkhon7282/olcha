import React, { useState } from 'react'

function CreateProduct() {
  const [title, setTitle] = useState("")
  return (
    <div>
        <h2>CreateProduct</h2>
        <form action="" className='create__form'>
          <input type={title} onChange={e => setTitle(e.target.value)} placeholder='title' />
          <input type="number" placeholder='price' />
          <input type="text" placeholder='urls' />
          <input type="text" placeholder='desc' />
          <select name="" id="">
            <option value="">Tanlang</option>
            <option value="phone">phone</option>
            <option value="tv">tv</option>
            <option value="laptop">laptop</option>
          </select>
          <button type="submit">Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct