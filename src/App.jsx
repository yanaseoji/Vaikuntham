import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './assets/pages/home/Home'
import About from './assets/pages/about/About'
import Contact from './assets/pages/contact/Contact'
import Finance from './assets/pages/services/finance/Finance'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'


function App() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/finance" element={<Finance />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
