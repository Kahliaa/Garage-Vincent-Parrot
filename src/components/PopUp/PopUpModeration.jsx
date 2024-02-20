import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import '../../styles/Avis.css'


export default function PopUpModeration() {

  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [moderation, setModeration] = useState("");
  const [newModeration, setNewModeration] = useState("1");

  const togglePopup = () => {
      setIsOpen(!isOpen);
  };

  const fetchAllReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5174/reviews");
      setReviews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {    
    fetchAllReviews();
  }, []);

////VALIDATION REVIEW////
  const validateReview = async (id) => {
    setModeration(newModeration)

    try {
      await axios.put("http://localhost:5174/validate", {moderation: newModeration, id: id})
      fetchAllReviews();
      console.log("Review validate")
    } catch(err) {
      console.log(err);
    }  
  };

////DELETE REVIEW////
  const deleteReview = (id) => {
    axios.delete(`http://localhost:5174/delete/reviews/${id}`).then(
      (response) => {
        setReviews(reviews.filter((review) => {
        return review.id !== id
      }))
    })
  };


  return (
    <div>
      <button className="option-title" onClick={togglePopup}>Modération des comentaires</button>
      {isOpen && (
        <div className="popup">
            <div className="popup-inner">
                <IoMdClose size={30} className="cross-popup" onClick={togglePopup}/>
                <h2>En attente de modération</h2>
                <div className="moderation-list">
                    {reviews.filter((review) => review.moderation === 0).map((review) => (
                        <div className="moderation-review" key={review.id}>
                          <p>{review.name}</p>
                          <p>{review.review}</p>
                          <div className="moderation-btn">
                            <button className="btn-valider" onClick={() => validateReview(review.id)}>Valider</button>
                            <button className="btn-supprimer" onClick={() => deleteReview(review.id)}>Supprimer</button>
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
