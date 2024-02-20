import React from "react";
import '../styles/Card.css'
import { Link } from "react-router-dom";

export default function ServiceCard(props) {
    return (
        <div className="services-list">
            <div key={props.id} className="service-card">
                <img src={props.img} className="serviceCard-img"></img>
                <div className="serviceCard-content">
                    <h3 className="serviceCard-title">{props.title}</h3>
                    <p className="serviceCard-info">{props.info}</p>
                </div>
                <div className="serviceBtn-container">
                    <Link to='/Contact'>
                        <button className="serviceCard-btn">Je prends RDV</button>
                    </Link>
                </div>
            </div>
        </div>  
    )
}