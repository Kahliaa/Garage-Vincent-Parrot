import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import '../../styles/Administrator.css';

export default function Messages() {

  const [messages, setMessages] = useState([]);


  const fetchAllMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5174/messages");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllMessages();
  }, []);

  ////DELETE MESSAGE////
  const deleteMessage = (id) => {
    axios.delete(`http://localhost:5174/delete/messages/${id}`).then(
      (response) => {
        setMessages(messages.filter((message) => {
        return message.id !== id
      }))
    })
  };

  return (
    <div>
        <div className="messages-container">
          <div className="messages">
            <h2><FaEnvelope size={25}/> Messagerie</h2>
            <div >
              {messages.map((message) => (
                  <div className='list-messages' key={message.id}>
                      <div>
                          <h3 className="message-subject">{message.subject}</h3>
                          <h4>{message.email}</h4>
                          <h4>{message.firstname} {message.lastname}</h4>
                          <p className="message">{message.message}</p>
                      </div>
                      <div className='moderation-btn'>
                        <button onClick={() => deleteMessage(message.id)} className='btn-supprimer-message'><IoMdClose /></button>
                      </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
