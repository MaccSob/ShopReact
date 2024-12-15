import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx';

function App() {
 
  return (
    <Router>
      <Header/>
    <>
    <Main></Main>
       <Routes>
       <Route path="/" element={<Main />} />
         <Route path="/About" element={<About />} />
       </Routes>
    </>
      </Router>
  )
}

export default App
