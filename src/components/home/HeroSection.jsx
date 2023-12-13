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
    // <section className='flex md:flex-row flex-col-reverse md:gap-20 gap-10 justify-center items-center'>
    //   <div className='flex-[4_2_0%] text-textColor'>
    //     <h1><span className='text-2xl'>Hello</span>, This is <span className='text-4xl font-bold text-primary mx-3'>Phoo Pwint Aung</span></h1>
    //     <h3 className='text-2xl text-amber-600 mt-4'>I'm A Frontend Developer</h3>
    //     <p className='mt-6'>I love making websites look awesome and work smoothly.Let's team up and create something amazing!Explore my portfolio and discover the possibilities we can build together.</p>
    //     <Button className='w-40'>See my works</Button>
    //   </div>
    //   <div className='flex-[3_2_0%] flex justify-center'>
    //     <img src={Profile} alt="profile image" className='h-[300px]'/>
    //   </div>
    // </section>
  )
}

export default HeroSection