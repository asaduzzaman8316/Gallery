import React, { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Privecy from './pages/Privacy'
import Footer from './components/Footer'

function App() {
  const [isClick, setIsClick] = useState(true);
  return (
    <>
      <Header isClick={isClick} setIsClick={setIsClick} />
      <Routes>
        <Route path='/' element={<Home setIsClick={setIsClick} />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy' element={<Privecy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
