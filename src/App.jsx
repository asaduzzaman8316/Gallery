import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Privecy from './pages/Privacy'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy' element={<Privecy />} />
      </Routes>
    </>
  )
}

export default App
