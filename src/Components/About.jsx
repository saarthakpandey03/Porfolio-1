import React from 'react'
import { Download } from 'lucide-react';
import {motion} from "framer-motion"
import Profile from '../assets/Profile.jpeg'
const About = () => {
  return (
    <section id='about'
    className='bg-[#090A0D] sm:h-[500px] lg:h-[600px] w-full text-white'>
    <div>

      {/* heading */}
       <motion.div 
       className='flex flex-col items-center justify-between pt-3'
       initial={{opacity:0,y: -30}}  
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.7,ease:"easeOut"}}
       viewport={{once:true}}
       >
        <h1 className='text-gray-500 text-2xl'>
          Get To Know More</h1>
         <h1 className='text-gray-400 text-2xl font-bold'>About <span className='text-[#12CC8F]'>Me</span></h1>
       </motion.div>

      <motion.div 
      initial={{opacity:0,y:60}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,ease:"easeOut"}}
      viewport={{once:true}}
      className='flex flex-row justify-between'>
       {/* left content */}
         <div className='w-1/2 pl-6 pt-5'>
        <p className='text-gray-300 sm:font-medium lg:text-xl lg:'>I'm a <span className='text-[#12CC8F]'>Fresher Full Stack Developer</span> pursuing B.Tech in Computer Science at IMS Engineering College (AKTU) with a CGPA of 7.6. I have hands-on experience in React.js, Django, and modern web technologies.
            <br /> <br />
            I'm an aspiring<span className='text-[#12CC8F]'> GenAI developer</span> with knowledge of LangChain, RAG, and Vector Databases. I've solved <span className='text-[#12CC8F]'>300+ LeetCode</span> problems and participated in multiple hackathons.
      </p>
       
         <p className="mt-4 text-sm text-gray-400 sm:font-medium lg:text-xl">
      🎓 B.Tech CSE · 2023–2027 · AKTU
    </p>

    <a href="/resume.pdf"
        download="Saarthak_pandey_Resume.pdf">
         <button className=' cursor pointer mt-8 ml-3 flex flex-row gap-2 items-center justify-center bg-[#12CC8F] w-45 h-10 rounded-xl text-black cursor-pointer'> 
          <Download size={20}/>Download Resume
          </button>
    </a>
    
       </div>
       {/* right  */}
       <div className=' w-1/2 mt-5 sm:ml-10 flex lg:justify-end mr-5  pb-3'>
        
        <img src={Profile} alt=""className=' sm:h-[400px] lg:h-[500px] rounded-b-4xl rounded-t-3xl pb-4' />
       </div>

      </motion.div>
    </div>
    </section>
  )
}

export default About
