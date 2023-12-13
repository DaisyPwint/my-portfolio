import React from 'react'
import { AboutSection, ContactSection, HeroSection, ProjectsSection } from '../components/home'

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto w-11/12'>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}

export default Home