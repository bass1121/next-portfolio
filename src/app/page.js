import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import Image from 'next/image';
import myEmoji from "../../public/images/myEmoji.png";
import { LoremIpsum } from 'react-lorem-ipsum';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';


export default function Home() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen" >
         
          <nav className="py-10 mb-12 flex justify-between font-mono">
            <h1 className="text-xl">Sean Bass</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 rounded-md ml-8">Resume</a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium'>Sean Bass</h2>
            <h3 className='text-2xl py-2'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              A Junior Developer with Full Stack Certification from Bottega University along with CS-50 certifications. I am self motivated, 
              I have a growth oriented mindset and I value a postitive mindset in the worst situations. I enjoy designing websites, learning new things, working on a team, 
              and finding solutions to problems.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a><AiFillFacebook/></a>
              <a><AiFillLinkedin/></a>
              <a><AiFillGithub/></a>
            </div>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image className="homepage-img" src={myEmoji} alt="myEmoji" placeholder='blur'/>
          </div>
        </section>
        {/* Second Page */}
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer:</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              <LoremIpsum p={1} /> <span className='text-teal-500'>some highlighted text</span><LoremIpsum p={1} />
            </p>
            <p className='text-md py-5 leading-8 text-gray-800'>
              <LoremIpsum p={1} /> <span className='text-teal-500'>some highlighted text</span><LoremIpsum p={1} />
            </p>
          </div>
          <div>
            <Image src=
          </div>
        </section>
      </main>
    </div>
  );
}

