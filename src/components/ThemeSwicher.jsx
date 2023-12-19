import React, { useEffect, useState } from 'react'
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';

const ThemeSwicher = () => {
  const [ checked,setChecked ] = useState(false);
  const [ theme,setTheme ] = useState(null);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');    
  },[])

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.setAttribute('data-mode','dark')
    }else{
      document.documentElement.removeAttribute('data-mode');
    }
  },[theme])

  const handleToggle = () => {
    setChecked(!checked);
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='md:ml-7'>
        <input type="checkbox" checked={checked} onChange={handleToggle} id='switcher'/>
        <label htmlFor='switcher' className='relative flex items-center w-15 h-8 rounded-full px-2 gap-1 transition bg-amber-200 cursor-pointer z-10'>
            <div className='w-5 h-5 flex items-center justify-center'>
                <FiSun className='text-white'/>
            </div>
            <div className='w-5 h-5 flex items-center justify-center'>
                <FiMoon className='text-white'/>
            </div>  
            <div className={`absolute w-5 h-5 rounded-full bg-amber-600 -z-10 transition-all duration-700 ${checked ? 'left-[32px]' : 'left-[8px]'}`} />        
        </label>
    </div>
  )
}

export default ThemeSwicher
