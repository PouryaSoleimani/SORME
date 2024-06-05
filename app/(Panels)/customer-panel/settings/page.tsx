//^ CUSTOMER-PANEL-SETTINGS
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import CustomerPanelsSideBar from '@/app/Components/PanelsSideBar/CustomerPanelsSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRecoilState } from 'recoil'
import { TOKEN, USERINFOS, isLoggedIn } from '@/app/Recoil/atoms'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'

type Inputs = { profile: string, currentPassword: string, fullName: string, newPassword: string, dateofBirth: string, confirmPassword: string, address: string }



const CustomerPanelSettingsPage = () => {
  const path = usePathname()
  const pathName = path.slice(16).toLocaleUpperCase()
  console.log(pathName)
  const notify5 = () => toast.success('Logged Out Successfully', { style: { border: '3px solid #F29AA7', padding: '10px', color: 'black', fontWeight: 'bold', fontSize: '12px', borderRadius: "10px" } })

  //? STATES
  const [token, setToken] = useRecoilState(TOKEN)
  const [userInfos, setUserInfos] = useRecoilState(USERINFOS)
  const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedIn)
  const router = useRouter()

  //YUP
  const schema = yup.object().shape({
    profile: yup.string().required("Profile is Required"),
    currentPassword: yup.string().required("Current Password is Required").min(10).max(30),
    fullName: yup.string().required('Full Name is Required'),
    newPassword: yup.string().required('New Password is Required'),
    dateofBirth: yup.string().required('Date Of Birth is Required'),
    confirmPassword: yup.string().required('Confirm Password is Required'),
    address: yup.string().required('Address is Required'),
  }).required();

  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }

  const logOutHandler = () => {
    setToken('');
    setUserInfos({})
    notify5()
    setTimeout(() => { setISLOGGEDIN(false) }, 1000);
    setTimeout(() => { router.push('/') }, 2000);
  }



  return (
    <section suppressHydrationWarning className='overflow-x-hidden'>
      <PanelsHeader />
      <CustomerPanelsSideBar pathname={pathName} />
      <div className='ml-[25rem] mt-[10rem] -z-10 text-black bg-[#FFF0F3] rounded-2xl w-[50rem] h-[30rem] flex flex-col space-y-3 items-center justify-between space-x-4 pl-3 pr-4 py-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 justify-start place-items-start bg-white px-10 pt-10 pb-0 w-full h-full'>
          {/* ADD PROFILE */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-2'>
              <label htmlFor="name" className='text-xl font-semibold'>Add Profile : </label>
              <input type="text" placeholder='Add File' {...register("profile")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-lg  placeholder:text-black  rounded-xl w-[7rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.profile && <p className='text-red-700 font-semibold'>{errors.profile.message}</p>}
            </span>
          </span>

          {/* CURRENT PASSWORD */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-2'>
              <label htmlFor="currentPassword" className='text-xl font-semibold'>Current Password : </label>
              <input type="text"  {...register("currentPassword")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[10rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.currentPassword && <p className='text-red-700 font-semibold'>{errors.currentPassword.message}</p>}
            </span>
          </span>

          {/* FULL NAME */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-2'>
              <label htmlFor="fullName" className='text-xl font-semibold'>Full Name : </label>
              <input type="text"  {...register("fullName")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[12rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.fullName && <p className='text-red-700 font-semibold'>{errors.fullName.message}</p>}
            </span>
          </span>

          {/* NEW PASSWORD */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-2'>
              <label htmlFor="newPassword" className='text-xl font-semibold'>New Password : </label>
              <input type="text"  {...register("newPassword")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[10rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.newPassword && <p className='text-red-700 font-semibold'>{errors.newPassword.message}</p>}
            </span>
          </span>

          {/* DATE OF BIRTH */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-2'>
              <label htmlFor="dateOfBirth" className='text-xl font-semibold'>Date Of Birth : </label>
              <input type="text"  {...register("dateofBirth")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[10rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.dateofBirth && <p className='text-red-700 font-semibold'>{errors.dateofBirth.message}</p>}
            </span>
          </span>

          {/* CONFIRM PASSWORD */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-2'>
              <label htmlFor="confirmPassword" className='text-xl font-semibold'>Confirm Password : </label>
              <input type="text"  {...register("confirmPassword")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[9rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.confirmPassword && <p className='text-red-700 font-semibold'>{errors.confirmPassword.message}</p>}
            </span>
          </span>

          {/* ADDRESS */}
          <span className='flex  items-start justify-start space-y-0 w-full col-start-1 col-end-3'>
            <span>
              <span className='flex items-center justify-start space-x-3'>
                <label htmlFor="address" className='text-xl font-semibold'>Address :</label>
                <input type="text"  {...register("address")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[27rem] ' />
              </span>
              <span className='flex items-center justify-start' >
                {errors.address && <p className='text-red-700 font-semibold'>{errors.address.message}</p>}
              </span>
            </span>
            <button type="submit" className='bg-[#FFF0F3] duration-500 px-2 py-2 mx-auto text-xl rounded-xl hover:bg-pink-600 text-black font-semibold'>Confirm</button>
          </span>



        </form>
        <div>
          <button onClick={logOutHandler} className='bg-white px-6 py-2 text-xl font-semibold rounded-xl hover:bg-pink-500 duration-500'>Log Out</button>
        </div>
      </div>
    </section>

  )
}

export default CustomerPanelSettingsPage