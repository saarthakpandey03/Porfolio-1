import React from 'react'
import {ArrowUpRight} from "lucide-react";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <section id='project'>
      <motion.div 
      className='bg-[#050c0f] h-full pb-10 text-white'
        initial={{opacity:0,y: -30}}  
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.7,ease:"easeOut"}}
       viewport={{once:true}}>

                              {/* header */}
        <motion.div className='pt-30 flex flex-col items-center justify-center'>
            <h1 className='font-bold text-4xl '>My <span className='text-[#12CC8F]'>Projects</span></h1>
            <h1 className='text-gray-400 text-xl pt-3'> Some things I've built</h1>
        </motion.div>

      <motion.div className='flex flex-wrap sm:justify-center lg:justify-start'
      initial={{opacity:0,y: 60}}  
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.7,ease:"easeOut"}}
       viewport={{once:true}}>
        {/*  card */}
        <div className="flex flex-col flex-wrap mt-10 sm:justify-center lg:justify-start">
            <div
                className="group bg-[#0b0e15] h-[470px] w-[400px] rounded-xl 
                flex flex-col ml-20 overflow-hidden
                border border-white/10
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(18,204,143,0.35)]"
  >

    
              <div className="relative w-full h-[200px]">
                <img
                  src="https://images.openai.com/static-rsc-3/RaAnbxXDyJJIFcDX6dZ3VWEjAtBH15BkrVZ6bXT-yy8wQ8ZBGJGMY5yp4jlnP_nYXwuvr9phUQEUEOcfHQdo8Q03JOmJbIU76TewgteCFJM?purpose=fullsize&v=1"
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />

      
              <div
                    className="absolute inset-0 
                   bg-[#12CC8F]/10 backdrop-blur-[2px]
                    flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300"
                      >
                  <div className="flex flex-row gap-16 items-center gap-2 text-black">
                      {/* GitHub Icon */}
                      <a href="https://github.com/saarthakpandey03/Real-Time-Chat">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                        <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.7.24 2.95.12 3.26.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                              </svg>
                            <span className="text-sm font-semibold">Code</span>
                        </a>
                   {/* <a href=" ">
          <ArrowUpRight size={35} />
          <span className="text-sm font-semibold pt-2 ">Demo</span>
         </a> */}
        </div>
      </div>
    </div>

    
    <div className="pl-6 pt-3 pr-3">
      <h1 className="font-bold text-2xl">
        Chatter - Real time Chat Web App
      </h1>
      <h1 className="pt-3 pr-3">
        You can talk to your friends in group and seperately with just group name and user name.
      </h1>
    </div>

   
    <div className="flex flex-wrap mt-12 pb-6 pl-2 gap-4 text-[#12CC8F]">
      <h1 className="border rounded-xl px-4 text-center font-semibold">HTML</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">CSS</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">JavaScript</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">Django</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">SQL lite</h1>

    </div>

  </div>
            </div>
        {/*  card */}
        <div className="flex flex-row flex-wrap mt-10 sm:justify-center lg:justify-start">
  <div
    className="group bg-[#0b0e15] h-[470px] w-[400px] rounded-xl 
               flex flex-col ml-20 overflow-hidden
               border border-white/10
               transition-all duration-300
               hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(18,204,143,0.35)]"
  >

    
    <div className="relative w-full h-[200px]">
      <img
        src="https://t3.ftcdn.net/jpg/02/23/60/54/360_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg"
        alt=""
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />

      
      <div
        className="absolute inset-0 
                   bg-[#12CC8F]/10 backdrop-blur-[2px]
             flex items-center justify-center
             opacity-0 group-hover:opacity-100
             transition-all duration-300"
      >
        <div className="flex flex-row gap-16 items-center gap-2 text-black">
          {/* GitHub Icon */}
         <a href="https://github.com/saarthakpandey03/Music-Player">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.7.24 2.95.12 3.26.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
          </svg>
          <span className="text-sm font-semibold">Code</span>
         </a>
         <a href=" https://saarthakpandey03.github.io/Music-Player/">
          <ArrowUpRight size={35} />
          <span className="text-sm font-semibold pt-2 ">Demo</span>
         </a>
        </div>
      </div>
    </div>

    {/* CONTENT (UNCHANGED) */}
    <div className="pl-6 pt-3 pr-3">
      <h1 className="font-bold text-2xl">
        Musitic - Music web plateform
      </h1>
      <h1 className="pt-3">
        Music Player you can listen song in this, user-friendly
      </h1>
    </div>

    {/* TAGS (UNCHANGED) */}
    <div className="flex mt-auto pb-6 pl-8 gap-4 text-[#12CC8F]">
      <h1 className="border rounded-xl px-4 text-center font-semibold">HTML</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">CSS</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">JavaScript</h1>
    </div>

  </div>
            </div>
        {/*  card */}
        <div className="flex flex-row flex-wrap mt-10 sm:justify-center lg:justify-start">
  <div
    className="group bg-[#0b0e15] h-[470px] w-[400px] rounded-xl 
               flex flex-col ml-20 overflow-hidden
               border border-white/10
               transition-all duration-300
               hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(18,204,143,0.35)]"
  >

    
    <div className="relative w-full h-[200px]">
      <img
        src="https://imgs.search.brave.com/o4pL9bpMU3hkBxK7MqfOspadTmmuK2At1VnbbFMNGgg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDcxLzA2My9zbWFs/bC9raWRzLXBsYXlp/bmctYXQtYmVhY2gt/aGFwcHktY2hpbGRy/ZW4tcGxheWluZy1h/dC1zZWFzaWRlLXN3/aW1taW5nLWluLW9j/ZWFuLWJ1aWxkaW5n/LXNhbmRjYXN0bGUt/c3VtbWVyLWhvbGlk/YXktb3ItdmFjYXRp/b24taWxsdXN0cmF0/aW9uLXZlY3Rvci5q/cGc"
        alt=""
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />

      
      <div
        className="absolute inset-0 
                   bg-[#12CC8F]/10 backdrop-blur-[2px]
             flex items-center justify-center
             opacity-0 group-hover:opacity-100
             transition-all duration-300"
      >
        <div className="flex flex-row gap-16 items-center gap-2 text-black">
          {/* GitHub Icon */}
         <a href="https://github.com/saarthakpandey03/Game_Zone">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.7.24 2.95.12 3.26.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
          </svg>
          <span className="text-sm font-semibold">Code</span>
         </a>
         <a href=" https://saarthakpandey03.github.io/Game_Zone/">
          <ArrowUpRight size={35} />
          <span className="text-sm font-semibold pt-2 ">Demo</span>
         </a>
        </div>
      </div>
    </div>

    {/* CONTENT (UNCHANGED) */}
    <div className="pl-6 pt-3 pr-3">
      <h1 className="font-bold text-2xl">
        Game-Zone : Save the Earth
      </h1>
      <h1 className="pt-3">
     A responsive web app that gamifies environmental awareness by allowing users to identify, filter, and reduce garbage from their surroundings to promote a pollution-free environment.</h1>
    </div>

    {/* TAGS (UNCHANGED) */}
    <div className="flex  flex-wrap mt-auto pb-6 pl-8 gap-4 text-[#12CC8F]">
      <h1 className="border rounded-xl px-4 text-center font-semibold">HTML</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">Tailwind CSS</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">TypeScript</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">JavaScript</h1>
      <h1 className="border rounded-xl px-4 text-center font-semibold">React</h1>
      
    </div>

  </div>
            </div>
      </motion.div>

    </motion.div>
    </section>
  )
}

export default Projects
