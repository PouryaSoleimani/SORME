//^ SINGLE PRODUCT PAGE 2 =================================================================================================================================================
import BreadCrumb from '@/app/Components/BreadCrumb/BreadCrumb'
import Footer from '@/app/Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import SingleProduct from '@/app/Components/SingleProduct/SingleProduct'

type ParamsType = { params: { id: string } }


const SingleProductPage2 = async (params: ParamsType) => {

  const productID = params.params.id
  const request = await fetch(`http://localhost:3000/products/${productID}`, { cache: 'force-cache' })
  const response = await request.json()


  return (
    <section suppressHydrationWarning className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      <SingleProduct suppressHydrationWarning {...response} />
      <Footer />
    </section>

  )
}

export default SingleProductPage2
