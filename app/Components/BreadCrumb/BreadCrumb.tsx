//^ BREADCRUMB COMPONENT
"use client"
import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import 'animate.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BreadCrumb = () => {

  const pathname = usePathname()

  //RETURN
  return (
    <div className='flex items-center justify-start px-[5.5rem] text-xl leading-10 animate__animated animate__fadeInLeft'>
      <Breadcrumbs>
        <BreadcrumbItem><Link href='/'>Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link href='/shop'>Shop</Link></BreadcrumbItem>
        <BreadcrumbItem><Link href={pathname}>{pathname.slice(1, 2).toUpperCase()}{pathname.slice(2,14).toLocaleLowerCase()}</Link></BreadcrumbItem>
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumb