'use client'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} type="button" className='dark:border-slate-300 dark:text-white'>
      <BsFillMoonStarsFill className="dark:hidden text-xl" fill='currentColor' />  
      <BsFillMoonStarsFill className="hidden dark:block text-xl" fill="currentColor" />
    </button>
  ) : null;
};

export default ThemeSwitcher;