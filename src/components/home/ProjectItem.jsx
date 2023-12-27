import React from 'react'
import Github from '../../assets/github.svg';
import Demo from '../../assets/demo.png';

const ProjectItem = ({name,img,tech,workUrl,demoUrl}) => {
  return (
    <div className='bg-cardBg rounded-md overflow-hidden border-2 border-titleColor'>
        <img src={img} alt={name} className='w-full h-48 md:h-64 object-cover transition duration-150 hover:scale-110' />
        <div className='text-textColor p-5 w-full'>
            <div className='flex flex-wrap items-center justify-between mb-2 md:mb-3 gap-1'>
                <h2 className="text-lg md:text-xl font-semibold mb-2">{name}</h2>
                <p className='flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm'>
                    {
                        tech.map((item,index) => (
                            <span key={index} className='inline-block px-2 py-1 bg-itemBg rounded-md'>{item}</span>
                        ))   
                    }
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-4 mt-4">             
                <ProjectLink url={workUrl} icon={Github} label="View Source Code" />
                <ProjectLink url={demoUrl} icon={Demo} label="Live Demo" />
            </div>
        </div>
    </div>
  )
}

const ProjectLink = ({ url, icon, label }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center rounded-md gap-2`}>
      {icon && <img src={icon} alt={`${label} Icon`} className='w-8 h-8' />}
      <p className='text-sm'>{label}</p>
    </a>
  );

export default ProjectItem