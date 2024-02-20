import React, { useState } from "react";
import axios from "axios";
import '../styles/Avis.css'


export default function AddReviews() {

    const [name, setName] = useState("");
    const [review, setReview] = useState("");

    const handleClick = async (event) => {
        try {
            await axios.post("http://localhost:5174/reviews", {
            name: name,
            review: review,
            })
            console.log("addReviews succeeds")
        } catch(err) {
            console.log(err);
        }
    };

  return (
    <>
        <form className="reviews-input">
            <input
                className="input"
                type="text"
                placeholder="Nom"
                onChange={(event) => setName(event.target.value)}
            />
            <textarea
                className="input-textarea"
                placeholder="Votre commentaire"
                onChange={(event) => setReview(event.target.value)}
            />

            <button type="submit" onClick={handleClick}>Envoyer</button>
        </form>
    </>
  )
}
