
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Homepage from './components/Homepage'
import Header from './components/Navbar'
import Footer from './components/Footer'
import Products from './Products'
import { ProductsDetails } from './ProductsDetails'
import Labroatry from './components/Labroatry'
import AboutUs from './components/AboutUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductsDetails" element={<ProductsDetails />} />
            <Route path="/Labroatry" element={<Labroatry />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
