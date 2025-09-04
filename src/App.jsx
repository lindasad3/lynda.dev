import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import { motion } from "motion/react"
import Portfolio from './Portfolio'
import Contact from './pages/Contact'

 function App() {
  return ( <>

    
          <Routes>
      <Route path="/" element={<Portfolio />} />
       <Route path="/Contact" element={<Contact />} />
    </Routes>
  </>)
}

export default App