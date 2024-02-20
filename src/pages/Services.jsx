import React, { useState, useEffect } from "react";
import axios from "axios";

import '../styles/Services.css';

import ServiceCard from "../components/ServiceCard.jsx";

export default function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {
      const fetchAllServices = async () => {
        try {
          const res = await axios.get("http://localhost:5174/services");
          setServices(res.data);
        } catch (err) {
          console.log(err); 
        }
      }
    fetchAllServices()
  }, []);

  return (
    <div className="services-container">
        <h2 className="services-title">Toutes nos prestations pour l'entretien de votre auto</h2>
        <div className="services">
            {services.map(service => (
                <ServiceCard 
                    key={service.id}
                    img={service.img}
                    title={service.title}
                    info={service.info}
                />
            ))}
        </div>
    </div>  
  )
}