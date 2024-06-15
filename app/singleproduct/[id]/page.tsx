//^ SINGLE PRODUCT PAGE 2 =================================================================================================================================================
import dynamic from 'next/dynamic'
import BreadCrumb from '@/app/Components/BreadCrumb/BreadCrumb'
import Footer from './../../Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import SingleProductComponent from './../../Components/SingleProduct/SingleProductComponent'
import 'aos/dist/aos.css';

const SingleProductDynamic = dynamic(() => import('./../../Components/SingleProduct/SingleProductComponent'), { ssr: false })

type ParamsType = { params: { id: string } }

const SingleProductPage2 = async (params: ParamsType) => {

  const productID = params.params.id
  const request = await fetch(`http://localhost:5000/products/${productID}`, { cache: 'no-store' })
  const response = await request.json()

  return (
    <section className='overflow-hidden'>
      <Header />  
      <BreadCrumb />
      <SingleProductDynamic {...response} />
      <Footer />
    </section>

  )
}

export default SingleProductPage2

