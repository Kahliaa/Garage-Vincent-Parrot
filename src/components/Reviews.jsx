import React, {useState, useEffect } from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Avatar from '@mui/material/Avatar';

import "swiper/css";
import '../styles/Reviews.css'

export default function Reviews() {

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
      const fetchAllReviews = async () => {
        try {
          const res = await axios.get("http://localhost:5174/reviews");
          setReviews(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchAllReviews()
    }, []);

  return (
    <div className='slider-container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {reviews.filter((review) => review.moderation === 1).map(review => (
          <SwiperSlide key={review.id}>
            <Avatar sx={{ width: 56, height: 56 }} />
            <div className='review-card-name'>{review.name}</div>
            <div className='review-card-review'>{review.review}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
