import CV from '../../assets/CV/cv.pdf';

const IntroSection = () => {
  return (
    <section>
      <h1 className='text-xl text-textColor'>Hi, I am <span className='md:text-2xl text-xl font-bold text-primary'>Phoo Pwint Aung</span></h1>
      <p className='text-textColor mt-6 indent-8 text-justify'>
      I am from Pyay, which is located in the Bago Region of Myanmar. I studied at Computer University in Pyay. During my studies, I developed a strong interest in design and I love creating things that can be useful to others. In my final year of university, I worked as an intern in a React position.

      Due to the COVID-19 pandemic and the political situation in Myanmar, I had to take a break from my career aspirations and help my family with our business. However, last year, I decided to pursue my dream once again. I worked as an intern front-end developer at Nexcode company in Mandalay for about four months in this, which was a great learning experience for me. 
      </p>
      <a href={CV} download className='bg-primary inline-block text-center p-3 mt-5 rounded-md text-amber-950' >Download CV</a>
    </section>
  )
}

export default IntroSection