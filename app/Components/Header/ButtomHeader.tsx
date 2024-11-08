//^ BOTTOM HEADER COMPONENT
"use client"
import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/dropdown";
import { BsShop } from "react-icons/bs";
import { Button } from '@nextui-org/button';
import 'animate.css';
import Link from 'next/link';


//COMPONENT
const ButtomHeader = () => {
  return (
    <section className='w-full px-16 flex items-start py-4 justify-between overflow-hidden animate__animated animate__fadeInUp'>

      {/* LEFT */}
      <div id="left" className='w-5/6 flex items-center justify-start space-x-10 text-md text-zinc-700 px-2'>
        <Dropdown backdrop="opaque" type='menu' closeOnSelect={false} className='w-[40rem] h-full py-4 flex flex-row justify-start items-start'>

          <DropdownTrigger>
            <Button variant="light" className='text-xl font-semibold'>
              Products Categorization
              <FaChevronDown className='h-5 w-8' />
            </Button>
          </DropdownTrigger>

          <DropdownMenu variant="light" aria-label="Static Actions" className='w-fit px-2 flex ' id='DropDownMenu'>
            <DropdownSection className='border-r-2 border-black flex items-start pr-8 justify-center space-y-8'>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Cosmetic</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Skin Products</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Hair Products</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Bathroom Products</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Health Products</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Appliances</p></DropdownItem>
            </DropdownSection>

            <DropdownSection className=' flex items-start pl-16 justify-center space-y-8 text-zinc-600'>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Cream</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Counsealers</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Conditioners</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Soaps and Shampoos</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>Multi Vitamins</p></DropdownItem>
              <DropdownItem><p className='text-xl py-2 font-bold hover:text-[#F29AA7]'>EyeLashes</p></DropdownItem>
            </DropdownSection>

          </DropdownMenu>

        </Dropdown>

        <span className='flex items-center justify-start space-x-8 text-md flex-shrink'>
          <Link href='/shop' className='flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-zinc-200 px-2 py-1.5 rounded-lg duration-300 whitespace-nowrap'>Products <BsShop className='ml-2 text-lg' /></Link>
          <Link href='/shop' className='flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-zinc-200 px-2 py-1.5 rounded-lg duration-300 whitespace-nowrap'>Organizational <img src="/images/icons/OrganizationalLogo.png" className='w-5 h-5 ml-2' /></Link>
          <Link href='/shop' className='flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-zinc-200 px-2 py-1.5 rounded-lg duration-300 whitespace-nowrap'>Counseling <img src="/images/icons/CounselingLogo.png" className='w-5 h-5 ml-2' /></Link>
          <Link href='/shop' className='flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-zinc-200 px-2 py-1.5 rounded-lg duration-300 whitespace-nowrap'>Gift Card <img src="/images/icons/GiftCardLogo.png" className='w-4 h-4 ml-2' /></Link>
          <Link href='/shop' className='flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-zinc-200 px-2 py-1.5 rounded-lg duration-300 whitespace-nowrap'>Web Blog <img src="/images/icons/weblogLogo.png" className='w-4 h-4 ml-2' /></Link>
        </span >
      </div >


      {/* RIGHT */}
      <div id="right" className='translate-x-10 pt-2 mr-[5rem] ' >
        <button className='flex items-center justify-center hover:scale-105 duration-300 cursor-pointer text-sm font-semibold whitespace-nowrap'>Sorme Branches<img src="/images/icons/BranchesLogo.png" className='w-6 h-6 ml-2' /></button>
      </div >

    </section >

  )
}

export default ButtomHeader

