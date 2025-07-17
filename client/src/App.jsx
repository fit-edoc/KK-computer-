import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './pages/Hero'
import Card from './pages/Testinomial'

import Parteners from './pages/Parteners'
import CardGrid from './pages/CardGrid'
import AboutSection from './pages/AboutSection'
import Insructor from './pages/Insructor'
import Popular from './pages/Popular'
import Footer from './pages/Footer'

function App() {
    const heroRef = useRef(null);
  const cardGridRef = useRef(null);
  const aboutRef = useRef(null);
  const partnersRef = useRef(null);
  const featuresRef = useRef(null);
  const instructorsRef = useRef(null);
  const coursesRef = useRef(null);

  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav scrollToSection={scrollToSection} sectionRefs={{
        hero: heroRef,
        services: cardGridRef,
        about: aboutRef,
        partners: partnersRef,
        features: featuresRef,
        instructors: instructorsRef,
        courses: coursesRef
      }} />
      
      <div ref={heroRef}>
        <Hero />
      </div>
      
      <div ref={cardGridRef}>
        <CardGrid />
      </div>
      
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      
      <div ref={partnersRef}>
        <Parteners />
      </div>
      
      <div ref={featuresRef}>
        <Card />
      </div>
      
      <div ref={instructorsRef}>
        <Insructor />
      </div>
      
      <div ref={coursesRef}>
        <Popular />
      </div>
      
      <Footer />
    </>
  );
}

export default App
