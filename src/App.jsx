import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

/*/////COMPONENTS/////*/
import Header from './components/Header/Header'
import FooterGarage from './components/Footer/Footer'

/*/////PAGES/////*/
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Occasions from './pages/Occasions.jsx'
import Contact from './pages/Contact.jsx'
import Connexion from './pages/Connexion.jsx'
import Administrator from './pages/Private/Administrator.jsx'
import Avis from './pages/Avis.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Occasions' element={<Occasions />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Connexion' element={<Connexion />} />
        <Route path='/Private/Administrator' element={<Administrator />} />
        <Route path='/Avis' element={<Avis />} />
      </Routes>
      <FooterGarage />
    </>
  )
}

export default App
