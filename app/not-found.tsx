
import { NextPage } from 'next'
import Header from './Components/Header/Header'
import 'animate.css';

const Notfound: NextPage = ({ }) => {

  return (
    <div className='overflow-hidden'>
      <Header />
      <div id="notFound_main" className='bg-[url("/images/not-found/NotFound_Background.png")] w-screen h-screen overflow-hidden bg-cover flex flex-col items-center justify-start py-10' >
        <div className=' text-center animate__animated animate__flash animate__slower '>
          <h1 className='text-zinc-50 text-9xl font-bold'>404</h1>
          <h2 className='text-zinc-50 text-5xl font-semibold mt-6'>Page Not Found</h2>
          <span className='flex mt-8 items-center py-0'>
            <input type="search" name="HeaderSearchInput" className='bg-zinc-100 py-6 pl-20 text-xl w-[25rem] placeholder:text-lg placeholder:text-zinc-900 outline-none border-none  text-zinc-800  rounded-2xl relative top-0 left-0' placeholder='Product search and...' />
            <img src="/images/icons/SearchInputIcon.png" className='w-16 h-16 text-zinc-600 p-3  cursor-pointer  hover:scale-110 duration-300 rounded-md absolute ' />
          </span>
        </div>
      </div >
    </div>
  )
}

export default Notfound