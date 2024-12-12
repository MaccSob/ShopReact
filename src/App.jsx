import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import Header from './components/Header/Header.jsx'

function App() {
 
  return (
    <Router>
      <Header></Header>
    <>
    <Main></Main>
       <Routes>
       </Routes>
    </>
      </Router>
  )
}

export default App
