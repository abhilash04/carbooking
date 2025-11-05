import React from 'react'
import PromoStrip from './components/PromoStrip'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'
import Work from './components/Work'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Hero from './components/Hero'
const App = () => {
  return (
    <div>
      <PromoStrip />
      <Header />
      <AboutUs />
      <Services />
      <Hero />
      <ChooseUs />
      <Work />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App