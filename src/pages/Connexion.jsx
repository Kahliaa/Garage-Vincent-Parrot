import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/Connexion.css'

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5174/login", {
      email: email,
      password: password,
    })
    .then(response => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        navigate("/Private/Administrator")
      }
    })
  }


  return (
    <div className="login-container">
        <div className="login-block">

            <form className="login-form">
                <p className="login-title">Connexion</p>
                <hr className="login-title-hr"/>
                  <input className="login-input"
                      placeholder="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                  />
                  <input className="login-input"
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                  />
            <button className="login-btn" onClick={handleLogin}>Se connecter</button>
            <h2>{loginStatus}</h2>
            </form>

        </div>
    </div>
  );
};