//^ HOME PAGE
"use client"
import React from 'react'
import Header from "./Components/Header/Header";
import HomeSwiper from "./Components/HomeSwiper/HomeSwiper";
import HomeBoxes from "./Components/HomeBoxes/HomeBoxes";
import HomeCarousel from "./Components/HomeCarousel/HomeCarousel";
import TopBrands from "./Components/TopBrands/TopBrands";
import HomeReviews from "./Components/HomeReviews/HomeReviews";
import HomeOptions from "./Components/HomeOptions/HomeOptions";
import ContactSupport from "./Components/ContactSupport/ContactSupport";
import Footer from "./Components/Footer/Footer";

//COMPONENT
const Home = () => {
  return (
    <>
      <div className="overflow-hidden max-w-[1580px] mx-auto">
        <Header />
        <HomeSwiper />
        <HomeBoxes />
        <HomeCarousel />
        <TopBrands />
        <HomeReviews />
        <HomeOptions />
        <ContactSupport />
        <Footer />
      </div>
    </>
  )
}

export default Home