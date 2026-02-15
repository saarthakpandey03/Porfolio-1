import React from "react";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Info = () => {

  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Full Stack Developer",
      "GenAI Enthusiast",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  return (
   <section id="info">
     <div className="h-screen w-full flex flex-col items-center justify-center pb-60 border-b-gray-600 border-t-stone-500 
                    bg-linear-to-br from-[#090A0D] via-[#0C0F14] to-[#0E1117] text-white">

      {/* Hello */}
      <div className="text-sm tracking-widest text-[#12CC8F] flex items-center justify-center pt-50">
        <h3 className="playwrite-cu-guides-regular">Hello, I'm</h3>
      </div>

      {/* Name */}
      <div className="flex gap-2 tracking-wider items-center justify-center sm:text-7xl lg:text-8xl font-serif font-bold">
        <h1>Saarthak</h1>
        <h1 className="text-[#12CC8F]">Pandey</h1>
      </div>

      {/* 🔥 Typing Text (REPLACED PART) */}
      <div className="text-3xl text-gray-400 text-center mt-2">
        <h3>
          I’m a passionate{" "}
          <span className="text-[#12CC8F] font-semibold">
            {text}
          </span>
          <Cursor cursorStyle="|" />
        </h3>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-8 items-center justify-center">

        <motion.a
          href="https://github.com/saarthakpandey03"
          className="w-12 h-12 rounded-full border border-white/10
                     flex items-center justify-center text-gray-400"
          whileHover={{
            scale: 1.15,
            rotate: 8,
            color: "#12CC8F",
          }}
          transition={{
            type: "tween",
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <Github />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/saarthak-pandey-a24118330/"
          className="w-12 h-12 rounded-full border border-white/10
                     flex items-center justify-center text-gray-400"
          whileHover={{
            scale: 1.15,
            rotate: 8,
            color: "#12CC8F",
          }}
          transition={{
            type: "tween",
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <Linkedin />
        </motion.a>

        <motion.a
          href="https://leetcode.com/u/saarthakpandey03/"
          className="w-12 h-12 rounded-full border border-white/10
                     flex items-center justify-center text-gray-400"
          whileHover={{
            scale: 1.15,
            rotate: 8,
            color: "#12CC8F",
          }}
          transition={{
            type: "tween",
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
            <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z" />
            <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24" />
          </svg>
        </motion.a>
      </div>

      {/* Arrow */}
      <button onClick={()=>{
        document.getElementById("about").scrollIntoView({
          behavior:"smooth"
        })
      }} 
       className="cursor:pointer--">
      <motion.div
        className="cursor:pointer flex justify-center mt-8 text-gray-500"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2.8,
          ease: "linear",
          repeat: Infinity,
        }}
       
      >
        <ArrowDown />
      </motion.div>
      </button>

    </div>
   </section>
  );
};

export default Info;
