import React, { useState } from 'react';
import axios from 'axios';
import { IoMdClose } from 'react-icons/io';
import '../../styles/Administrator.css'

export default function PopUpCar() {

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [km, setKm] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async (event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:5174/cars", {
        name: name,
        year: year,
        price: price,
        km : km,
        description: description,
        })
        console.log("addCar succeeds")
      } catch(err) {
          console.log(err);
      }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="option-title" onClick={togglePopup}>Ajouter une nouvelle annonce</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <IoMdClose size={30} className="cross-popup" onClick={togglePopup}/>
            <h2>Nouvelle annonce</h2>
            <form className='popup-form'>
                <label>Nom :</label>
                <input
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                />

                <label>Année de mise en circulation:</label>
                <input
                    type="text"
                    onChange={(event) => setYear(event.target.value)}
                />

                <label>Prix :</label>
                <input
                    type="text"
                    onChange={(event) => setPrice(event.target.value)}
                />

                <label>Kilomètrage :</label>
                <input
                    type="text"
                    onChange={(event) => setKm(event.target.value)}
                />

                <label>Description :</label>
                <textarea 
                    type="text"
                    onChange={(event) => setDescription(event.target.value)}
                />
            <button onClick={handleClick}>Ajouter annonce</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}