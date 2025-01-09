import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Main/Home.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx';
import Browse from './components/Browse/Browse.jsx';
import Contact from './components/Contact/Contact.jsx'
import Cart from './components/Cart/Cart.jsx'


function App() {
 
  return (
    <Router>
      <Header/>
    <>
       <Routes>
       <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Browse" element={<Browse />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Cart" element={<Cart />} />
       </Routes>
    </>
      </Router>
  )
}

export default App
