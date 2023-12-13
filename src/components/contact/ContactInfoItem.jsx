import SubTitle from '../SubTitle'

const ContactInfoItem = ({icon,title,text,path}) => {
  return (
    <div className='bg-cardBg hover:bg-hoverCardBg hover:-translate-y-2 transition rounded-md p-6 flex flex-col flex-wrap justify-center items-center gap-2'>
        <img src={icon} alt={title} className='h-[100px]'/>
        <SubTitle className="mb-3">{title}</SubTitle>
        <a href={path} target='_blank' rel='noreferrer'>{text}</a>
    </div>
  )
}

export default ContactInfoItem