import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../styles/Hours.css'

export default function Hours() {

  const [hours, setHours] = useState([]);

  useEffect(() => {
      const fetchAllHours = async () => {
        try {
          const res = await axios.get("http://localhost:5174/hours");
          setHours(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchAllHours()
    }, []);

  return (
    <div className='hours-container'>
        {hours.map(hour => (
            <div className='hours' key={hour.id}>
              <div className='hours-day'>
                <p>{hour.day}</p>
              </div>
                <p>{hour.hourMorning}</p>
                <p>{hour.hourEvening}</p>  
            </div> 
        ))}
    </div>
  )
}
