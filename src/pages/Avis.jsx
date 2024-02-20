import React, { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard';
import axios from 'axios';
import AddReviews from '../components/AddReviews';
import '../styles/Avis.css';

export default function Avis() {

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
    <div className='reviews'>
        <div className='reviews-container'>
            <p className='reviews-slogan'>Votre avis compte</p>
            <div className='reviews-card-container'>
                {reviews.filter((review) => review.moderation === 1).map(review => (
                    <ReviewCard key={review.id} item={review}/>
                ))}
            </div>
        </div>
        <div className='reviews-container-input'>
            <p className='reviews-slogan'>Donnez le votre</p>
            <hr className='title-hr'/>
            <div>
                <AddReviews />
            </div>
        </div>  
    </div>
  )
}
