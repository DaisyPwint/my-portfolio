import React from 'react'
import Title from '../Title'
import Button from '../Button'
import Profile from '../../assets/profile.svg'

const AboutSeciton = () => {
  return (
    <section className='pt-32'>
      <Title>About Me</Title>
      <div className='flex md:flex-row flex-col gap-5'>        
        <div className='flex-[4_2_0%] lg:mt-10'>
          <p className='text-textColor'>
          As a frontend web developer, I am passionate about crafting seamless online experiences. My recent projects involve utilizing React, Tailwind CSS, and Ant Design (Antd), adding a modern and dynamic touch to web development.
          </p>
          <Button className="w-32" direction="/about">Read More</Button>
        </div> 
        <div className='flex-[3_2_0%] flex justify-center'>
          <img src={Profile} alt="about me image" className='h-[300px]' />
        </div>       
      </div>
    </section>
  )
}

export default AboutSeciton