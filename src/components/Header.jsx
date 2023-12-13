import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import ThemeSwicher from './ThemeSwicher'

const navigation = [
    {
        name: 'Home',href: '.',
    },
    {
        name: 'About',href: 'about',
    },
    {
        name: 'Projects',href: 'projects',
    },
    {
        name: 'Contact',href: 'contact',
    },
]

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [isMobile,setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  )

  useEffect(() => {
    window.addEventListener('resize',() => {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    })
  },[])

  return (
    <header className='sticky top-0 border-b border-amber-200 bg-bkg z-20'>
        <div className="max-w-5xl mx-auto w-11/12 ">
            <div className="flex items-center justify-between py-2">
                <a href="." className='font-serif text-4xl text-amber-600 font-bold'>Phoo Pwint</a>
                <div className="flex p-1 gap-1 items-center">
                    <nav className='md:flex hidden'>
                        {
                                navigation.map(item => (
                                    <NavLink key={item.name} to={item.href} className={`text-md inline-block px-2 text-textColor transition-all duration-100 hover:underline hover:duration-300 hover:text-amber-400 ${({isActive}) => isActive ? 'active' : null}`}>{item.name}</NavLink>
                            ))
                        }
                    </nav>
                    <ThemeSwicher/>
                    {
                        isMobile && (
                            <div className='cursor-pointer ml-2 text-xl p-1 hover:bg-slate-300 hover:rounded-md' role='button' tabIndex="0" onKeyDown={() => setIsMenuOpen(true)} onClick={() => setIsMenuOpen(true)}>
                                <FiMenu/>
                            </div>
                        )
                    }
                    {
                        (isMobile && isMenuOpen) && (
                            <div className='fixed top-0 right-0 bg-gray-200 h-screen w-[200px] max-w-250 transform transition-transform ease-in-out duration-700 overflow-hidden z-20'>
                                <div
                                    className='absolute top-4 right-7 cursor-pointer ml-2 text-xl p-1 hover:bg-slate-300 hover:rounded-md' role='button' tabIndex="0" onKeyDown={() => setIsMenuOpen(false)} onClick={() => setIsMenuOpen(false)}
                                    >
                                    <AiOutlineClose/>
                                </div>
                                <nav className='flex flex-col justify-center items-center gap-3 mt-[100%]'>
                                    {
                                        navigation.map(item => (
                                            <NavLink key={item.name} to={item.href} className={`text-md inline-block px-2 text-amber-950 transition-all duration-300 hover:underline hover:duration-300 hover:text-amber-400 ${({isActive}) => isActive ? 'active' : null}`}>{item.name}</NavLink>
                                        ))
                                    }
                                </nav>
                            </div>
                          )
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
