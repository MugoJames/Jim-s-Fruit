import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'
import Banners from './components/Banners/Banners'
import Banner2 from './components/Banners/Banner2'
import Banners3 from './components/Banners/Banners3'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
    <main className=' overflow-y-hidden '>
      <Navbar/>
      <Hero />
      <Menus />
      <Banners />
      <Banner2 />
      <Banners3 />
      <Footer />
    </main>
    </>
  )
}

export default App
