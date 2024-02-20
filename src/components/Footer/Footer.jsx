import React from 'react';
import '../Footer/Footer.css';

import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { FooterCopyright } from 'flowbite-react';

import Hours from '../Hours.jsx';

export default function FooterGarage() {

    return (
        <footer>
            <div className='footerInfo'>
                <div className="socialMediaIcon">
                    <FaFacebookSquare size={30} className='socialLink'/>
                    <FaTwitterSquare size={30} className='socialLink'/>
                    <FaInstagramSquare size={30} className='socialLink'/>
                </div>
                <div className='bottomPage'>
                    <Link to='/' className='logoFooter'>
                        Vincent<br/>Parrot.
                    </Link>
                <FooterCopyright by='VincentParrot.' year={2023} className='copyright'/>
                </div>
            </div>
            <div className='hour'>
                    <Hours />
            </div>
        </footer>
    )
}