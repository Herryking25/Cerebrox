import React from 'react'
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Partners from './components/Partners';
import WhyChooseUs from './components/WhyChooseUs';
import FAQContactSection from './components/FAQContactSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
    <div className='bg-[#EAEAEA] px-20 border-none shadow-md'>
    <Navbar />
    <Hero />
    </div>
    <ServiceCard />
    <Partners />
    <WhyChooseUs />
    <FAQContactSection />
    <Footer />
   
    </div>
  )
}

export default App
