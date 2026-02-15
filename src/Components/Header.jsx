import React from 'react'

const Header = () => {
  return (
    <div className= 'p-2 fixed  w-full z-10000 border-b-1 border-gray-600 border-t-1 h-18  bg-linear-to-br from-[#090A0D] via-[#0C0F14] to-[#0E1117] text-white'>
       <div className=' flex flex-row justify-between pr-5'>
            <div>
                <button onClick={()=>{
                    document.getElementById("info").scrollIntoView({
                        behavior:"smooth"
                    });
                }}
                className=' pt-2.5 pl-2 text-xl text-[#12CC8F] font-bold'>
                    SP</button>
            </div>
            <div className='pt-1.5 text-gray-400 text-lg flex flex-row items-center justify-center gap-12'>
                <button onClick={()=>{
                    document.getElementById("about").scrollIntoView({
                        behavior:"smooth"
                    });
                }}
                className='cursor-pointer hover:text-[#12CC8F] hover:scale-110'>
                <h2>About</h2>
                </button>

                <button onClick={()=>{
                    document.getElementById("skills").scrollIntoView({
                        behavior:"smooth"
                    });
                }}
                className='cursor-pointer hover:scale-110 hover:text-[#12CC8F]'>
                <h2>Skills</h2>
                </button>

                <button onClick={()=>{
                    document.getElementById("project").scrollIntoView({
                        behavior:"smooth"
                    });
                }}
                className='cursor-pointer hover:scale-110 hover:text-[#12CC8F]'>
                <h2>Projects</h2>
                </button>

                <button onClick={()=>{
                    document.getElementById("contact").scrollIntoView({
                        behavior:"smooth"
                    });
                }}
                className='cursor-pointer hover:scale-110 hover:text-[#12CC8F]'>
                <h2>Contact</h2>
                </button>

            </div>
            {/* <div>
                 <a href="/resume.pdf"
        download="Saarthak_pandey_Resume.pdf">
                <button className='cursor-pointer h-9 w-36 mr-3 items-center mt-3 pr-1 bg-[#12CC8F] rounded-xl text-black'>Download CV</button>

        </a>
            </div> */}

        </div>
    </div>
  )
}

export default Header
