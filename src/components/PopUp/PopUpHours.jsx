import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import { AiOutlineForm } from "react-icons/ai";
import '../../styles/Administrator.css';

export default function PopUpHours() {

  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState([]);
  const [hourMorning, setHourMorning] = useState('');
  const [hourEvening, setHourEvening] = useState('');
  const [hourId, setHourId] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const fetchAllHours = async () => {
    try {
      const res = await axios.get("http://localhost:5174/hours");
      setHours(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllHours();
  }, []);

////UPDATE SERVICE////
const showSingleHour = async (id) => {  
  try {
      const {data} = await axios.get(`http://localhost:5174/hours/${id}`);
      setHourMorning(data[0].hourMorning);
      setHourEvening(data[0].hourEvening);
      setHourId(data[0].id);
  } catch(error) {
      console.log(error)
  };
};

const editHour = async (event) => {
  event.preventDefault()
  try {
      await axios.put(`http://localhost:5174/updateHour`, {hourMorning: hourMorning, hourEvening: hourEvening, id: hourId})
      setHourMorning('');
      setHourEvening('');
      fetchAllHours();
      console.log("Hour updated")
  } catch(err) {
      console.log(err);
  }
}

  return (
    <div>
      <button className="option-title" onClick={togglePopup}>Changer horaire du garage</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <IoMdClose size={30} className="cross-popup" onClick={togglePopup} />
            <h2>Horaire</h2>
            <h3>Les horaires actuels sont :</h3>
            {hours.map((hour) => (
              <div className='update-hour' key={hour.id}>
                <div className='hour-list'>
                  <label>{hour.day}</label>
                  <p>{hour.hourMorning}</p>
                  <p>{hour.hourEvening}</p>
                  <button onClick={() => showSingleHour(hour.id)} className='btn-valider'><AiOutlineForm /></button>
                </div>
              </div>
            ))}
            <form className='hours-form' onSubmit={editHour}>
              <input
                  type="text"
                  placeholder="Heure ouverture"
                  value={hourMorning}
                  onChange={(event) => setHourMorning(event.target.value)}
              />
              <input
                  type="textarea"
                  placeholder="Heure fermeture"
                  value={hourEvening}
                  onChange={(event) => setHourEvening(event.target.value)}
              /> 
                  <button className='btn-edit'>Edit </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}