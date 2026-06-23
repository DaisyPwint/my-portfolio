import React from 'react'
// import Profile from '../../assets/profile.svg';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className='text-center text-textColor flex flex-col items-center'>
        <h1><span className='text-2xl'>Hello</span>, This is <span className='md:text-4xl text-3xl font-bold text-primary mx-3'>Phoo Pwint Aung</span></h1>
        <h3 className='md:text-2xl text-xl text-amber-600 mt-4'>I'm A Frontend Developer</h3>
        <div className='md:w-[500px]'>
          <p className='mt-6'>Passionate about creating awesome websites that work seamlessly. Let's team up and build something amazing! Explore my portfolio for the possibilities we can create together.</p>
        </div>
        <Button className='w-40' direction="/projects">See my works</Button>
    </section>
  )
}

export default HeroSection