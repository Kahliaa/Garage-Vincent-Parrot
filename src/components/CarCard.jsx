import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cars.css'

export default function CarCard({item}) {
  return (
    <div className='car-container'>
            <div className='car'>
                <img className='car-img' alt=""/>
                <div className='car-info'>
                  <h2>{item.name}</h2>
                  <h3>{item.year}</h3>
                  <h4>{item.km} kilomètres</h4>
                  <p>{item.description}</p>
                  <h2 className='car-price'>{item.price} €</h2>
                </div>
                <div className='btn-container'>
                  <Link to='/Contact'>
                    <button className='car-btn'>Réserver</button>
                  </Link>
                </div>
            </div>
    </div>
  )
}
