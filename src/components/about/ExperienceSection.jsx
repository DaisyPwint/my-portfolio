import React from 'react';
import SubTitle from '../SubTitle';
import Title from '../Title';

const ExperienceItem = ({ date, description }) => {
  return (
    <div className='flex flex-wrap items-center mb-3 md:mb-4 gap-20'>
      <SubTitle className='text-textColor'>{date}</SubTitle>
      <p className='px-2 py-1 bg-itemBg rounded-md text-textColor'>{description}</p>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section className='mt-20'>
      <Title>Work Experience</Title>

      <ExperienceItem
        date="2020(June - August)"
        description="Intern at Galaxy AI Company ltd."
      />

      <ExperienceItem
        date="2023(August - November)"
        description="Intern at Nexcode Company ltd."
      />
    </section>
  );
};

export default ExperienceSection;
