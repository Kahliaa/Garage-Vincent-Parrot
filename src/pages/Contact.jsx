import React, { useState } from "react";
import axios from "axios";
import '../styles/Contact.css';

export default function Contact() {

    const [subject, setSubject] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = async (event) => {
        try {
            await axios.post("http://localhost:5174/messages", {
                subject: subject,
                firstName: firstName,
                lastName: lastName,
                email: email,
                message: message,
            })
            console.log("Message sends")
        } catch(err) {
            console.log(err);
        }
    };



    return (
        <div className="contact-container">
            <form className="contact-form">
                <div className="contact-title-container">
                    <p className="contact-title">Pour nous contacter</p>
                    <hr className="contact-title-hr"/>  
                </div>

                <select className="input2" name="sujet" onChange={(event) => setSubject(event.target.value)}>
                    <option value="" disabled>-- Merci de choisir le sujet de votre demande --</option>
                    <optgroup value="Service" label="Service">
                        <option value="Entretien">Entretien et vidange</option>
                        <option value="Mecanique">Mécanique générale</option>
                        <option value="pneu">Changement de pneu</option>
                    </optgroup>
                    <optgroup value="Occasion" label="Occasion">
                        <option value="Achat">Acheter un véhicule</option>
                        <option value="Vendre">Vendre son véhicule</option>
                    </optgroup>
                    <option value="Renseignement">Demande de renseignements</option>
                </select>
                
                <input 
                    className="input2" 
                    placeholder="Nom" 
                    type="text" 
                    onChange={(event) => setLastName(event.target.value)}
                />
                
                <input 
                    className="input2" 
                    placeholder="Prénom" 
                    type="text" 
                    onChange={(event) => setFirstName(event.target.value)} 
                />
                
                <input 
                    className="input2" 
                    placeholder="Email" 
                    type="email" 
                    name="email" 
                    onChange={(event) => setEmail(event.target.value)}
                />
                
                <textarea 
                    className="input2" 
                    placeholder="Votre message ici"
                    name="message" 
                    onChange={(event) => setMessage(event.target.value)} 
                />

                <button type="submit" onClick={handleClick}>Envoyer</button>
            </form>
        </div>
    )
}