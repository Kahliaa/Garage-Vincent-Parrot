import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Occasions.css';
import FilterSubmit from '../components/Filter/FilterSubmit.jsx';
import CarCard from '../components/CarCard.jsx';

export default function Occasions() {
  const [selectedKm, setSelectedKm] = useState([0, 150000]);
  const [selectedPrice, setSelectedPrice] = useState([0, 50000]);
  const [selectedYear, setSelectedYear] = useState([1990, 2024]);
  const [cars, setCars] = useState([]);

  const handleChangeKm = (event, newKm) => {
    setSelectedKm(newKm);
  };
  const handleChangePrice = (e, newPrice) => {
    setSelectedPrice(newPrice);
  };
  const handleChangeYear = (event, newYear) => {
    setSelectedYear(newYear);
  };
  
  //////DATA CARS//////
  useEffect(() => {
    const getAllCars = async () => {
      try {
        const res = await axios.get("http://localhost:5174/cars");
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllCars();
  },[]);

  //////FILTER DATA CARS//////
  const updatedList = cars.filter((car) =>
      car.price >= selectedPrice[0] && car.price <= selectedPrice[1] &&
      car.year >= selectedYear[0] && car.year <= selectedYear[1] &&
      car.km >= selectedKm[0] && car.km <=selectedKm[1]
  );

  return (
    <div className='occasions-container'>
      <div className='occasions-title'>Nos occasions disponibles :</div>
      <div className='cars-container'>
        <div className='car_filter'>
          <FilterSubmit 
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            selectedKm={selectedKm}
            changeKm={handleChangeKm}
            selectedYear={selectedYear}
            changeYear={handleChangeYear}
          />
        </div>
        <div className='cars-cards'>
          {updatedList.map((car) => (
            <CarCard key={car.id} item={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

