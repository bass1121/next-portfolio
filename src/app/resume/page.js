import ThemeSwitcher from "@/ThemeSwitcher";
import CopyToClipboard from "@/utils/copyToClipboard";
import "../../styles/resume.css";
import "../../styles/global.css";

export default function Resume() {
  return (
    <div className="resume bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 ">
       <nav className="navbar grid grid-rows-2 py-10 font-mono sm:flex sm:justify-between sm:py-10 sm:mb-12">
            <div className='flex space-x-3 sm:flex sm:space-x-3 sm:justify-evenly'>
              <h1 className="text-2xl mb-4 dark:text-gray-300">seanbass99@gmail.com</h1>
              <CopyToClipboard /> 
            </div>
            <ul className="flex  sm:flex-row sm:flex sm:items-center">
              <li>
                <ThemeSwitcher />
              </li>
              <li>
                <a href="/" className="bg-gradient-to-r text-2xl from-cyan-500 to-teal-500 text-white px-5 rounded-md ml-4">Portfolio</a>
              </li>
            </ul>
        </nav>

        <div className="h-full">
          resume
        </div>
    </div>
  );
}


