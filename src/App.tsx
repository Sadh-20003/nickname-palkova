import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Product'
import FeaturedHighlight from './components/FeaturedHighlit'
import Flavours from './components/Flavour'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Products />
      <FeaturedHighlight />
      <Flavours />
      <About />
      <Contact />
      <Footer />


    </div>
  )
}

export default App
