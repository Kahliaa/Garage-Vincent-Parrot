import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../Header/Header.css';

export default function Header() {

    const [showLinks, setShowLinks] = useState(false);
    
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    };
    let btnNavBar;
    if (showLinks === false) {
        btnNavBar = <button className='nav-btn' onClick={handleShowLinks}><FaBars size={25}/></button>;
    } else {
        btnNavBar = <button className='nav-btn close-nav-btn' onClick={handleShowLinks}><FaTimes size={25}/></button>;
    };

    return(
        <header>
            <div>
                <Link to='/' className='logoGarage'>
                    Vincent<br/>Parrot.
                </Link>
                
            </div>           
            <ul className={`${showLinks ? 'show-nav' : ''}`}>
                
                <NavLink to='/' className='link'>Accueil</NavLink>
                <NavLink to='/Services' className='link'>Services</NavLink>
                <NavLink to='/Occasions' className='link'>Occasions</NavLink>
                <NavLink to='/Contact' className='link'>Contact</NavLink>
                <NavLink to='/Connexion' className='link'>Connexion</NavLink>
            </ul>
            {btnNavBar}
        </header>
    )
}