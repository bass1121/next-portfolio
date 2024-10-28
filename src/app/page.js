import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import Image from 'next/image';
import { 
  myEmoji, cIcon, flaskIcon, githubIcon, html, mysqlIcon, nextJSICon, pythonIcon, reactIcon, tailwind, flaskPortfolio, flaskPortfolioCode, nextPortfolio, elleBee
} from "../utils/images";
import CopyToClipboard from '../utils/copyToClipboard'
import ThemeSwitcher from '@/utils/ThemeSwitcher';


export default function Home() {
  return (
    <div>
        <main className="bg-white px-10 sm:px-20  dark:bg-gray-900">
          <section className="min-h-screen" >
            <nav className="navbar grid grid-rows-2 py-10 font-mono sm:flex sm:justify-between sm:py-10 sm:mb-12">
              <div className='flex space-x-3 sm:flex sm:space-x-3 sm:justify-evenly'>
                <h1 className="text-lg sm:text-2xl mb-1 dark:text-gray-300">seanbass99@gmail.com</h1>
                <CopyToClipboard placeholder="blur" /> 
              </div>
              <ul className="flex sm:flex-row sm:flex sm:items-center">
                <li>
                  <ThemeSwitcher />
                </li>
                <li>
                  <a href="/resume" className="bg-gradient-to-r text-1xl sm:text-2xl from-cyan-500 to-teal-500 text-white px-5 rounded-md sm:ml-4">Resume</a>
                </li>
              </ul>
            </nav>

            <div className='text-center p-10'>
              <h2 className='text-4xl sm:text-5xl py-2 text-teal-500 font-medium'>Sean Bass</h2>
              <h3 className='text-2xl py-2 dark:text-gray-300'>Developer and Designer</h3>
              <p className='text-md sm:text-lg text-center py-5 leading-8 text-gray-800 dark:text-gray-300'>
                A Junior Developer with Full Stack Certification from Bottega University along with CS-50 certifications. I currently work as a manager/producer for a social media company. I am self motivated, 
                I have a growth oriented mindset and I value a postitive mindset in the worst situations. I enjoy designing websites, learning new things, working on a team, 
                and finding solutions to problems. I enjoy working through problems finding solutions. I am currently seeking part-time work, free-lance work or a permenant full time job. I hope you like what you see!
                </p>
              <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <a href="https://www.facebook.com/sean.bass.927?mibextid=JRoKGi"><AiFillFacebook/></a>
                <a href="https://www.linkedin.com/in/sean-bass-185b18211/"><AiFillLinkedin/></a>
                <a href="https://github.com/bass1121"><AiFillGithub/></a>
              </div>
            </div>
            <div className='relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-60 h-60 sm:w-90 sm:h-90 mt-10 overflow-hidden'>
              <Image className="" src={myEmoji} alt="myEmoji" placeholder='blur'/>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className='m-2 md:m-20'>
              <h3 className='text-2xl font-medium sm:text-3xl py-1 dark:text-teal-500 dark:font-medium'>Tools I Use:</h3>
              <div className='grid grid-cols-3 m-1 text-md sm:py-5 leading-8 w-100% md:grid md:grid-cols-5'>
                <div className=' mx-3'>
                <h4 className='icon-title'>React</h4>
                  <Image className="icon" src={reactIcon} alt="Icon" placeholder="empty" />
                </div>
                <div className="mx-3">
                  <h4 className='icon-title'>Flask</h4>
                  <Image className="icon" src={flaskIcon} alt="Icon" placeholder="empty" />
                </div>
                <div className="mx-3">
                  <h4 className='icon-title'>C</h4>
                  <Image className="icon" src={cIcon} alt="Icon" placeholder="empty" />
                </div>
                <div className="mx-3">
                  <h4 className='icon-title'>Github</h4>
                  <Image className="icon" src={githubIcon} alt="Icon" placeholder="empty" />  
                </div>
                <div className="mx-3">
                  <h4 className='icon-title'>HTML</h4>
                  <Image className="icon" src={html} alt="Icon" placeholder="empty" />
                </div>
                <div className="mx-3">
                <h4 className='icon-title'>Next.js</h4>
                  <Image className="icon" src={nextJSICon} alt="Icon" placeholder="empty" />
                </div>
                <div className="mx-3">
                  <h4 className='icon-title'>MySQL</h4>
                  <Image className="icon" src={mysqlIcon} alt="Icon" placeholder="empty" />
                </div>
                <div className="mx-3">
                  <h4 className='icon-title'>Python</h4>
                  <Image className="icon" src={pythonIcon} alt="Icon" placeholder="empty" />
                </div>
                <div className="mx-3">
                <h4 className='icon-title'>Tailwind</h4>
                  <Image className="icon" src={tailwind} alt="Icon" placeholder="empty" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className='m-2 sm:m-20'>
                <h2 className='font-medium text-2xl sm:text-3xl dark:text-teal-500 dark:font-medium'>Examples of previous work:</h2>
              <div className='place-items-center justify-items-center'>
                <div id="card" className='card'>
                    <Image className='w-auto mx-auto border' src={flaskPortfolio} alt='flask pic'/>
                    <h3 className='text-2xl font-medium pt-8 pb-2 dark:text-teal-300'>Flask Portfolio Website</h3>
                    <p className='py-2 text-gray-800'>
                      A flask website that uses MySQL for a database. The user can create an account, login to the website, update, 
                      their account information and upload portfolio and resume information. App includes form verification, password verification and password encryption.
                    </p>
                    <h4 className='py-4 font-medium text-2xl dark:text-teal-300'>Tools used:</h4>
                    <ol className='grid grid-cols-1 text-base sm:grid-cols-2 md:grid-cols-3'>
                      <li className='text-gray-800 py-1'>Flask</li>
                      <li className='text-gray-800 py-1'>Python</li>
                      <li className='text-gray-800 py-1'>MySQL</li>
                      <li className='text-gray-800 py-1'>VS Code</li>
                      <li className='text-gray-800 py-1'>Github</li>
                      <li className='text-gray-800 py-1'>Werkzeug Security</li>
                    </ol>
                </div>

                <div id="card" className='card'>
                    <Image className='mx-auto w-auto border' src={nextPortfolio} alt='flask pic'/>
                    <h3 className='text-2xl font-medium pt-8 pb-2 dark:text-teal-300'>Next.js Personal Portfolio</h3>
                    <p className='py-2 dark:text-gray-800'>
                      A NextJS portfolio to showcase some of my previous work. It consists of two pages, multiple components, helper functions, imported icons and a dark/light theme that remembers the user's preference. The page is set up for mobile devices.
                    </p>
                    <h4 className='py-4 text-2xl font-medium dark:text-teal-300'>Tools used:</h4>
                    <ol className="grid grid-cols-1 text-base sm:grid-cols-2 md:grid-cols-3">
                      <li className='text-gray-800 py-1'>JavaScript</li>
                      <li className='text-gray-800 py-1'>CSS</li>
                      <li className='text-gray-800 py-1'>NextJS</li>
                      <li className='text-gray-800 py-1'>Tailwind</li>
                      <li className='text-gray-800 py-1'>React</li>
                      <li className='text-gray-800 py-1'>Netlify</li>
                      <li className='text-gray-800 py-1'>Github</li>
                      <li className='text-gray-800 py-1'>VS Code</li>
                    </ol>
                </div>

                <div id="card" className='card'>
                    <Image className='mx-auto w-auto border' src={elleBee} alt='flask pic'/>
                    <h3 className='text-2xl font-medium pt-8 pb-2 dark:text-teal-300'>React Website For Content Creator</h3>
                    <p className='py-2 dark:text-gray-800'>
                      A website created for ElleBee Entertainment, a company that creates content on social media. Consists of links to all of her social media accounts, admin login and edit, a blog page
                      and links to donate to channels. It dynamically updated video list pulling from Youtube's API. It was built with react class components. It utilizes state and props.
                    </p>
                    <h4 className='py-4 text-2xl font-medium text-gray-800 dark:text-teal-300'>Tools used:</h4>
                    <ol className='grid grid-cols-1 text-base sm:grid-cols-2 md:grid-cols-3'>
                      <li className='text-gray-800 py-1'>React</li>
                      <li className='text-gray-800 py-1'>MongoDB</li>
                      <li className='text-gray-800 py-1'>SCSS</li>
                      <li className='text-gray-800 py-1'>Google API</li>
                      <li className='text-gray-800 py-1'>VS Code</li>
                      <li className='text-gray-800 py-1'>CSS</li>
                      <li className='text-gray-800 py-1'>Netlify</li>
                    </ol>
                </div>
              </div>
            </div>
          </section>
          <section>
            <footer className="sm:flex sm:justify-around">
              <div className='flex sm:flex sm:space-x-3'>
                <h1 className="text-lg sm:text-2xl mr-1 mb-2 dark:text-gray-300">seanbass99@gmail.com</h1>
                <CopyToClipboard placeholder="blur" /> 
              </div>
              <a href="/resume" className="footerButton bg-gradient-to-r text-1xl sm:text-2xl h-max from-cyan-500 to-teal-500 text-white px-5 rounded-md">Resume</a>
            </footer>
          </section>
        </main>
    </div>
  );
}

