import React from "react";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion"

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bgqya7r",   // <-- your Service ID
        "template_24mzohs",  // <-- replace
        e.target,
        "OGLGDTkGOq8hNWmHk"    // <-- replace
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        e.target.reset(); // form clear
      })
      .catch((error) => {
        console.log(error);
        alert("Failed ❌");
      });
  };

  return (
    <section id="contact" className="bg-[#090A0D] h-[1000px] w-full text-white">
      <motion.div 
     
      initial={{opacity:0,y: -30}}  
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.7,ease:"easeOut"}}
       viewport={{once:true}}>

        <h1 className="sm:text-2xl lg:text-4xl font-bold pt-20 text-center">
          Get In <span className="text-[#12CC8F]">Touch</span>
        </h1>

        <h1 className="text-center text-gray-400 pt-6">
          Have a question or want to work together?
        </h1>

        {/* IMPORTANT → form added here */}
        <form
          onSubmit={sendEmail}
          className="flex sm:flex-col lg:flex-row sm:justify-start sm:items-center sm:gap-10 lg:justify-center pt-30"
        >

          {/* LEFT */}
          <div className="sm:w-full lg:w-1/2 flex flex-col gap-10 items-center justify-center sm:pl-3 sm:pr-3 lg:pl-20">

            <div className="flex flex-row gap-5 bg-linear-to-br from-[#090A0D] via-[#0F131A] to-[#0E1117] rounded-xl h-20 sm:w-[100%] lg:w-1/2 items-center pl-6">
              <div className="text-[#12CC8F] bg-emerald-900 w-11 h-11 rounded-xl flex items-center justify-center">
                <Mail />
              </div>
              <div>
                <h1 className="text-gray-400">Email</h1>
                <h1 className="font-medium">saarthak3206@gmail.com</h1>
              </div>
            </div>

            <div className="flex flex-row gap-5 bg-linear-to-br from-[#090A0D] via-[#0F131A] to-[#0E1117] rounded-xl h-20 sm:w-[100%] lg:w-1/2 items-center pl-6">
              <div className="text-[#12CC8F] bg-emerald-900 w-11 h-11 rounded-xl flex items-center justify-center">
                <Phone />
              </div>
              <div>
                <h1 className="text-gray-400">Phone</h1>
                <h1 className="font-medium">+91 9717073995</h1>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5 sm:w-full lg:w-1/2 sm:pl-3 sm:pr-3 lg:pl-20">

            <div className="flex bg-linear-to-br from-[#090A0D] via-[#0F131A] to-[#0E1117] rounded-xl h-20 sm:w-[100%] lg:w-2/3 items-center pl-6">
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="placeholder-gray-400 outline-0 text-xl "
              />
            </div>

            <div className="flex bg-linear-to-br from-[#090A0D] via-[#0F131A] to-[#0E1117] rounded-xl h-20 sm:w-[100%] lg:w-2/3 items-center pl-6">
              <input
                name="email"
                required
                type="email"
                placeholder="Your Email"
                className="placeholder-gray-400 outline-0 text-xl bg-transparent"
              />
            </div>

            <div className="bg-linear-to-br from-[#090A0D] via-[#0F131A] to-[#0E1117] rounded-xl h-50 sm:w-[100%] lg:w-2/3 pl-6">
              <textarea
                name="message"
                required
                placeholder="Your Message"
                className="pt-5 placeholder-gray-400 outline-0 text-xl bg-transparent"
                cols={86}
                rows={6}
              />
            </div>

            <button
              type="submit"
              className="bg-[#12CC8F] h-10 sm:w-[100%] lg:w-2/3 rounded-xl text-black cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
