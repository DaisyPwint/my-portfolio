import SubTitle from '../SubTitle';
import Title from '../Title';

const EducationSection = () => {
  return (
    <section className='mt-32'>
      <Title>Education</Title>
      <div className='flex flex-wrap items-center mb-2 md:mb-3 gap-10'>
        <SubTitle className='text-textColor'>University</SubTitle>
        <p className='px-2 py-1 bg-itemBg rounded-md text-textColor'> 
          Computer University (Pyay)
        </p>
      </div>
    </section>
  )
}

export default EducationSection