import React from 'react'
import HomeReviewItem from './HomeReviewItem'
import 'aos/dist/aos.css';


const HomeReviews = () => {
  return (
    <div className='flex items-center justify-center my-10 space-x-20 px-20' data-aos="zoom-out-up" data-aos-duration="400" data-aos-easing="linear">
      <HomeReviewItem src='/images/reviews/Review1.png' />
      <HomeReviewItem src='/images/reviews/Review2.png' />
      <HomeReviewItem src='/images/reviews/Review3.png' />
    </div>
  )
}

export default HomeReviews