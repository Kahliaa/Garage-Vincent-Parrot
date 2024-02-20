import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import { AiOutlineForm } from "react-icons/ai";
import '../../styles/Administrator.css'

export default function PopUpCar() {

    const [isOpen, setIsOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [services, setServices] = useState([]);
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [serviceId, setServicesId]= useState('');

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };    

    const fetchAllServices = async () => {
        try {
        const res = await axios.get("http://localhost:5174/services");
        setServices(res.data);
        } catch (err) {
        console.log(err);
        }
    }  

    useEffect(() => {
        fetchAllServices();
    }, []);  
    
////ADD SERVICE////
    const addService = async (event) => {
    event.preventDefault();
        try {
            await axios.post("http://localhost:5174/services", {
            title: title,
            info: info,
            })
            setTitle('');
            setInfo('');
            fetchAllServices();
            console.log("addService succeeds")
        } catch(err) {
            console.log(err);
        }
    };

////UPDATE SERVICE////
    const showSingleService = async (id) => {
        setEditMode(true);
        
        try {
            const {data} = await axios.get(`http://localhost:5174/services/${id}`);
            setTitle(data[0].title);
            setInfo(data[0].info);
            setServicesId(data[0].id);
        } catch(error) {
            console.log(error)
        };
    };

    const editService = async (event) => {
        event.preventDefault()
        try {
            await axios.put(`http://localhost:5174/updateService`, {title: title, info: info, id: serviceId})
            setEditMode(false);
            setTitle('');
            setInfo('');
            fetchAllServices();
            console.log("Service updated")
        } catch(err) {
            console.log(err);
        }
    }

////DELETE SERVICE////
    const deleteService = (id) => {
        axios.delete(`http://localhost:5174/delete/${id}`).then(
            (response) => {
            setServices(services.filter((service) => {
            return service.id !== id
            }))
        })
    };

    return (
        <div>
            <button className="option-title" onClick={togglePopup}>Modifier / Ajouter services</button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-inner">
                        <IoMdClose size={30} className="cross-popup" onClick={togglePopup}/>
                        <h2>Modifier service</h2>
                        <form className='services-form' onSubmit={editMode ? editService : addService}>
                            <input
                                type="text"
                                placeholder="Titre"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <input
                                type="textarea"
                                placeholder="Information"
                                value={info}
                                onChange={(event) => setInfo(event.target.value)}
                            />
                            {editMode ? 
                                <button className='btn-edit'>Edit </button> : 
                                <button className='btn-ajouter'>Ajouter</button>
                            }
                        </form>
                        <div >
                            {services.map((service) => (
                                <div className='list-services' key={service.id}>
                                    <img src={service.img}></img>
                                    <div>
                                        <h3>{service.title}</h3>
                                        <p>{service.info}</p>
                                    </div>
                                    <div className='moderation-btn'>
                                        <button onClick={() => showSingleService(service.id)} className='btn-valider'><AiOutlineForm /></button>
                                        <button onClick={() => deleteService(service.id)} className='btn-supprimer'><IoMdClose /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}                            