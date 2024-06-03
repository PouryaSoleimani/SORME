//^ SHOPPING CART COMPONENT =======================================================================================================================================
"use client"
import Link from 'next/link'
import { SHOPPINGCART } from '@/app/Recoil/atoms';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'animate.css';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number, count: number }

//COMPONENT ======================================================================================================================================
const ShoppingCart = () => {
  AOS.init()

  const [products, setProducts] = useRecoilState(SHOPPINGCART)


  return (

    <div id="main" className='p-4 flex items-start justify-center space-y-6 w-full h-fit mt-6 mx-auto animate__animated animate__flash animate__slow'>

      {!products.length ? (
        <span className='flex flex-col items-center justify-start py-2 w-full h-full'>
          <h1 className='text-pink-500 w-fit mx-auto p-6 text-center text-2xl rounded-2xl border border-pink-400 font-bold bg-pink-100'>Shopping Cart is Empty ...</h1>
          <img src="/images/shopping-cart/Empty_Shopping_Cart.png" alt="Empty_Shopping_Cart" className='w-[20rem] h-[20rem]' />
          <Link href='/shop' className='bg-emerald-400 text-3xl px-3 py-4 rounded-2xl text-white font-bold hover:bg-emerald-600 hover:scale-110 duration-300'>Go to Shop →</Link>
        </span>
      ) : (

        <div id="Products" className='px-20 animate__animated animate__pulse flex gap-1 pt-4 mb-16 flex-wrap place-items-start '>
          {products.map((item: SingleProductType) => <ShoppingCartItem key={uuidv4()} {...item} />)}
        </div>

      )}

    </div>

  )
}

export default ShoppingCart