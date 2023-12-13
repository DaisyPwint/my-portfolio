import React from 'react'
import { EducationSection, ExperienceSection, IntroSection, SkillSection } from '../components/about'
import ContactSection from '../components/home/ContactSection';

const About = () => {
  return (
    <div className='max-w-5xl mx-auto w-11/12'>
      <IntroSection/>
      <EducationSection/>
      <SkillSection/>
      <ExperienceSection/>
      <ContactSection/>
    </div>
  )
}

export default About