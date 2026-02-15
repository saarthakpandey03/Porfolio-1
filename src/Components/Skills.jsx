import Reactjs from '../assets/Portfolio image/Reactjs.webp'
import js from '../assets/Portfolio image/js.webp'
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <section id="skills" className=' p-20 bg-linear-to-br from-[#090A0D] via-[#0F131A] to-[#0E1117] h-[1000px] text-white h-full'>
    <div>
             <motion.div 
             className='pt-4 pb-10 flex flex-col items-center justify-center'
             initial={{opacity:0,y: -30}}  
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.7,ease:"easeOut"}}
              viewport={{once:true}}>
                  <h1 className='text-4xl font-bold'>Technical <span className='text-[#12CC8F]'>Skills</span></h1>
                 <h1 className='font-medium text-gray-400'>Technolohies and tools I work with</h1>
             </motion.div>
           
            <motion.div 
            className='p-10 rounded-2xl h-full bg-[#101826]  flex flex-row gap-9 lg:justify-start sm:justify-center  flex-wrap gap-6 text-2xl font-bold'
            initial={{opacity:0,y: 30}}  
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.7,ease:"easeOut"}}
            viewport={{once:true}}>
           {/* boxes */}

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" className="w-25 h-25 object-contain mt-4" />
                  <h1> Html5</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000" alt="" className="w-25 h-25 object-contain mt-4" />
                  <h1> CSS3 </h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src={js} alt="" className="w-30 h-30 object-contain mt-2"/>
                  <h1>JavaScript </h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src={Reactjs} alt="" className="w-25 h-25 object-contain mt-4" />
                  <h1> React JS</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="" className="w-25 h-25 object-contain mt-4"  />
                  <h1>Tailwind CSS</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000" className="w-25 h-25 object-contain mt-4"  />
                  <h1>MongoDB</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=QeIg9siFKGgp&format=png&color=000000" className="w-25 h-25 object-contain mt-4" />
                  <h1>MySQL</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition pt-1">

                  <img src="https://img.icons8.com/?size=100&id=ouWtcsgDBiwO&format=png&color=000000" alt="node-js"  className="w-25 h-25 object-contain mt-4"/>
                  <h1>Node</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=000000" className="w-25 h-25 object-contain mt-4"/>
                  <h1> Python</h1>
                </div>
                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=2T6TKY6whzgV&format=png&color=000000" alt="" />
                  <h1> C++</h1>
                </div>
                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=48216&format=png&color=000000" className="w-25 h-25 object-contain mt-4"/>
                  <h1> DS & Algo</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvklEQVR4nO1aS2sTURS+9YG0c05iFRERVLAWdFGf4ErxtawbRRAsSOfcpCBoKeiqan6DoNg497RFBaG1grpyY/VHtLrSrba2agVRQSMnMzfG2DyalJkp9oMLIblzM9/MPec755tRahnLKAvXOMe1waxmnNQMc/6QzzigB51jKu4gL9FGBl9oxlylIXPSw4ntKo4gzzmiGWaCE31PDP16qGVP192Njgz5rA1c1QanfEIwowfhkIrbViKDX/MkGB+6Zj2Wn7seNeOYJRObO1NMQmJA5VRT1YNyqukPGRxXS5JEgHP31iWIcTp/bJQJoBESFsRwvXB8VIHdKAmBa1r2BmtMqrCRzrZuKWwJg14mo1bUu5brB35OG/iswkaRTozVeydKiRDDJxUm0owHifEBeXCqb0Q1N7zeYHJfcGcnVJjIZNSqxVxPG8gE2nNbhY2eQdwhAU4G3hLjD1FqMvCUPDy5kHXS2dakNvBBiLjGOarChGZIa4PfK9RQo+nsppaqC+VUExl8FBz3XIUJbfBKsJ9/SbYiz+lIZ9XqnuHmzcR4iRhmgxMbqUHVByIpUSwJYvypGWi+OeTBziIyndVIiA6JHqkoSBBjd6W5KYO9wZV+Uo2EVAYqShJSkkssnB9Kri2dL9ss2H5TsSYhIMZbNrBLBfHiDbVGVFozPIs1ifxvd7BdlNiqu1SxlVIsBdkpViQsXAOHC90g4zQxXBOVvnBzA8jQXnK/iF2hJmOYiW1gS9qspT/XjOORpdhqJIohqpyPAYMTBcfE4ISUHaEotmsSB86MqJUFxa6DRKRwzdqtUhZIFWtrp6Bm+mXFLp9iJTvdwfZKawlpzTCcMs5Ze1HC6+zYD8CUgdPBydy2TZKdJ2WG7RMksOdbyzXo+kovRR9ejqrHHrP9BDG8yZ+053SUpM3RcvVQXEgMFAsZMX6T70XMarFsZDvFjoTAOn9SXqgaLBtiuB87EgIp8PyYwV5VwbKxXRwxdkmqVnGzbDRjZxDYs90Mu6pZNiFnp0SbLSFq8Z2KsxQx9vUMJbfZ6jZSy0YzvrSGci2WjbSnlkxhGPgYqWWTYueEtfYrueLlthkxPNaM72wpHpllo/0nRXIF+5e0ZaMZXpcKXL2I2rKZkz+Weqmhhf62bMJ/hqEXg4iQCFpavylKtKmwQQZfyQl0c8vuuhb4t8cOd0uVBrs8eFQNkpAMqCJ9xs2+JVPJGIg1iVJBrPkZRhxJzFOiLMiyiQ2JRiybyAL7v3ilotxLLsTwRcaSesllGSo6/Abi11edW4PZRwAAAABJRU5ErkJggg==" alt="chain" 
                  className="w-25 h-25 object-contain mt-4"/>
                  <h1> LangChain </h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=KlkfbDEjskb5&format=png&color=000000" alt="data-configuration" className="w-25 h-25 object-contain mt-4"/>

                  <h1> Vector DB</h1>
                </div>

                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=Y2pl5tCeyxJm&format=png&color=000000" alt="ai-robot--v7" className="w-25 h-25 object-contain mt-4"/>
                  <h1> RAG</h1>
                </div>
                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">

                  <img src="https://img.icons8.com/?size=100&id=PsAPeKP98vSE&format=png&color=000000" alt="ai-robot--v7" className="w-25 h-25 object-contain mt-4"/>
                  <h1> Agentic AI</h1>
                </div>
                
                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">
                  <img src="https://img.icons8.com/?size=100&id=u9R54eMKS8fw&format=png&color=000000" alt="" />
                  <h1>GitHub</h1>
                </div>
                <div className="bg-[#0b0e15] h-[250px] w-[200px] rounded-xl 
                flex flex-col items-center justify-between
                p-6 text-center border border-white/10
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(18,204,143,0.25)]
                transition">
                  <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="" />
                  <h1>Git</h1>
                </div>
                <div>
                </div>
                
            </motion.div>

    </div>
    </section>
  )
}

export default Skills
