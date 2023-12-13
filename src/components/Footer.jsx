import { Link } from "react-router-dom"
import SubTitle from "./SubTitle"

const Footer = () => {
  return (
    <footer className='bg-slate-800 py-7'>
      <div className="max-w-5xl mx-auto w-11/12">
        <div className='flex md:flex-row flex-col justify-center items-center md:gap-48 gap-16'>
          <a href="." className='font-serif text-4xl text-amber-600 font-bold'>Phoo Pwint</a>
          <div className="flex md:flex-row flex-col md:gap-32 gap-14">
            <FooterCol heading="Important Links"
            links={
              [
                {
                  type: 'Link',
                  title: 'Home',
                  path: '/'
                },
                {
                  type: 'Link',
                  title: 'About',
                  path: '/about'
                },
                {
                  type: 'Link',
                  title: 'Projects',
                  path: '/projects'
                },
                {
                  type: 'Link',
                  title: 'Contact',
                  path: '/contact'
                },
              ]
            }        
            />
            <FooterCol heading="Contact Info"
            links={
              [
                {
                  title: '+959 441569788',
                  path: 'tel:+959 441569788'
                },
                {
                  title: 'phoopwint445@gmail.com',
                  path: 'mailto:phoopwint445@gmail.com'
                },
              ]
            }        
            />
          </div>
        </div>
        <p className="text-slate-200">
          {`All right serves - ${new Date().getFullYear()} by Phoo Pwint Aung`}
        </p>
      </div>
    </footer>
  )
}

const FooterCol = ({heading,links}) => {
  return (
    <div className="flex flex-col text-slate-200">
    <SubTitle className='pb-3'>{heading}</SubTitle>
    <ul>
      {
        links.map((item,index) => (
          <li key={index} className="my-2">
            {
              item.type === 'Link' ? (
                <Link to={item.path}>{item.title}</Link>
              ) : (
                <a href={item.path} target='_blank' rel='noreferrer'>{item.title}</a>
              )
            }
          </li>
        ))
      }
    </ul>
    </div>
  )
}

export default Footer