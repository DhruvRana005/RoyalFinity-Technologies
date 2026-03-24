import React from 'react'
import Hero from '../components/Hero'
import PremiumServices from '../components/PremiumServices'
import Ideas from '../components/Ideas'
import Projects from '../components/Projects'
import Faq from '../components/Faq'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <PremiumServices />
      <Ideas />
      <Projects />
      <Faq />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
