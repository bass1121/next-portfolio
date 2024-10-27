import ThemeSwitcher from "@/utils/ThemeSwitcher";
import CopyToClipboard from "@/utils/copyToClipboard";
import Image from "next/image";
import { resume1, resume2 } from "@/utils/resumeExp";
import "../../styles/resume.css";

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

        <div className=" place-items-center">
          <Image src={resume2} priority className="resumeImage w-2/4 shadow-lg mb-4 dark:shadow-teal-300 rounded-xl"  alt="resume0"/>
          <Image src={resume1} priority className="resumeImage w-2/4 shadow-lg mb-2 dark:shadow-teal-300 rounded-xl"  alt="resume1"/>
        </div>
    </div>
  );
}


