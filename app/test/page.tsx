"use client"
//^ TEST PAGE ===============================================================================================================================
import { Image } from '@nextui-org/react'
import React, { FormEventHandler, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { SHOPPINGCART } from '../../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number }
type RecoilStateItemType = { id: number, title: string }

const TestPage = () => {

  const [products, setProducts] = useRecoilState(SHOPPINGCART)
  const [userID, setUserID] = useState('')

  function addToCartHandler() {
    const copy = [...products]
    const item = { title: 'NEW RECOIL ADDED ITEM' }
    copy.push(item)
    setProducts(copy)
    console.log('ADDED TO CART')
  }

  function deleteUser(event: React.FormEvent<HTMLFormElement>, id: number) {
    event.preventDefault()
    axios.delete(`http://localhost:5000/users/${id}`).then(response => console.log(response))
    setUserID('')
  }

  function clearCartHandler() { setProducts([]) }

  return (
    <>

      <div>
        {products.map((item: RecoilStateItemType) => <p key={uuidv4()} className='text-4xl font-bold px-4'>+{item.title}</p>)}
      </div>

      <button onClick={addToCartHandler} className='text-xl bg-black text-white px-6 py-3 rounded-xl'>ADD TO CART</button>
      <button onClick={clearCartHandler} className='text-xl bg-black text-white px-6 py-3 rounded-xl'>CLEAR CART</button>

      <form onSubmit={(event) => deleteUser(event, Number(userID))}>
        <input type="number" value={userID} onChange={(event) => setUserID(event.target.value)} className='border px-3 py-2 border-black w-[20rem]' />
        <button type='submit' className='bg-red-800 p-2 text-2xl font-bold text-white'>DELETEUSER</button>
      </form>
    </>
  )
}

export default TestPage