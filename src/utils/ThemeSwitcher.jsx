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
      <BsFillMoonStarsFill className="moon fixed top-1 sm::top-1 right-2 text-2xl sm:text-3xl dark:hidden" />  
      <BsFillMoonStarsFill className="moon fixed top-1 sm:top-1 right-2 text-2xl hidden sm:text-3xl dark:block" />
    </button>
  ) : null;
};

export default ThemeSwitcher;