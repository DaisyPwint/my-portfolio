import Title from "../Title"

const skills = ['HTML','CSS','Javascript','React','Tailwind CSS','Ant Design','Bootstrap']

const SkillSection = () => {
  return (
    <section className='mt-20'>
      <Title>Skills</Title>
        <p className='flex flex-wrap gap-2 items-center justify-start text-textColor'>
        {
          skills.map((item,index) => (
              <span key={index} className='inline-block px-2 py-1 bg-itemBg rounded-md'>{item}</span>
          ))   
      }
        </p>
    </section>
  )
}

export default SkillSection