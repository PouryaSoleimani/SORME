import React from 'react'
import HomeOptionItem from './HomeOptionItem'
import 'aos/dist/aos.css';


const HomeOptions = () => {
  return (
    <div className='flex items-center justify-around px-14' data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
      <HomeOptionItem src='/images/options/Options1.png' title='Money Back' desc='Refund in case of Dissatisfaction' />
      <HomeOptionItem src='/images/options/Options2.png' title='Send a Gift' desc='Send a gift with a Purchase of $50' />
      <HomeOptionItem src='/images/options/Options3.png' title='Originality' desc='All goods are guaranteed to be Original' />
      <HomeOptionItem src='/images/options/Options4.png' title='Instant Delivery' desc='Immediate Delivery under 48 hours' />
    </div>
  )
}

export default HomeOptions