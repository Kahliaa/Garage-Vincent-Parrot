import React from "react";

import '../styles/Home.css'
import { Link } from "react-router-dom";
import { FaWrench } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

import Hours from "../components/Hours";
import Reviews from "../components/Reviews";

export default function MainPage() {

    return (
            <div className="home">
                <div className="slogan">
                    <p className="text-slogan">Votre Voiture<br/>Notre Passion</p>
                    <div className="reviews-container-home">
                    <Link to='/Avis' className="general-link">
                        <Reviews />
                    </Link>
                    
                </div>
                </div>
                <div className="home-block">
                    <div className="top-btn">
                        <div className='block'>
                            <Link to='/Services' className="general-link">
                                <FaWrench size={30} className="logo"/>
                                <p className="logo-title">Services</p>
                            </Link> 
                        </div>
                        <div className='block'>
                            <Link to='/Occasions' className="general-link">
                                <FaCar size={30} className="logo"/>
                                <p className="logo-title">Occasions</p>
                            </Link>    
                        </div>
                    </div>    
                    <div className="adresse-block">
                        <Hours />
                        <div className="adresse">
                            <p>11 rue du Garage</p>
                            <p>31000 Toulouse</p>
                            <p>05 00 00 00 00</p>
                        </div>
                    </div>
                </div>
            </div> 
    )
}