import React from 'react'
import Avatar from '@mui/material/Avatar';
import '../styles/Reviews.css'

export default function ReviewCard({item}) {

  return (
    <div className='review-card'>
      <Avatar sx={{ width: 56, height: 56 }} />
      <div>{item.name}</div>
      <div>{item.review}</div>
    </div>
  )
}
