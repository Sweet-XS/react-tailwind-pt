import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
      <Navbar scrolled={scrolled}></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default App
