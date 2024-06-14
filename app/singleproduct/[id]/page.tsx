//^ SINGLE PRODUCT PAGE 2 =================================================================================================================================================
import BreadCrumb from '@/app/Components/BreadCrumb/BreadCrumb'
import Footer from '@/app/Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import SingleProduct from '@/app/Components/SingleProduct/SingleProduct'
import { headers } from 'next/headers'

type ParamsType = { params: { id: string } }

const SingleProductPage2 = async (params: ParamsType) => {

  const headersList = headers()
  const referer = headersList.get('referer')
  const ID = referer?.slice(36)

  const productID = params.params.id

  const request = await fetch(`http://localhost:3000/products/${productID}`, { cache: 'force-cache' })
  const response = await request.json()

  return (
    <section suppressHydrationWarning className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      <SingleProduct  {...response} />
      <Footer />
    </section>

  )
}

export default SingleProductPage2
