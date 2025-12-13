import { useState, useEffect } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa6";


export default function HeroSection() {
  const words = ["Freelancer", "Developer"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayText.length < words[index].length) {
        timeout = setTimeout(() => {
          setDisplayText(words[index].slice(0, displayText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 80);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, index]);

  return (
    <section id="home" className="w-full h-screen bg-[url('/assets/heroimagenw1.png')] bg-cover bg-center flex flex-col pb-15 md: pt-30 lg:pl-35 md:pl-20 bg-[url('/assets/heroimagenw1.png')] lg:bg-[url('/assets/heroimagenw1.png')]"
      >
     




      {/* TEXT SECTION */}
      
      <div className="w-full  flex flex-col pt-20 md:pb-0 justify-center gap-4 pl-4 lg:pt-25">
        
        <h2 className="text-3xl md:text-4xl font-light font-poppins text-white">Hello There!</h2>

        <h1 className="text-4xl font-poppins font-semibold text-white lg:text-6xl">
          I am a <span className="text-blue-900 font-bold">{displayText}</span>
        </h1>

        <h2 className="text-white text-4xl md:text-5xl font-poppins">I make the complex simple.</h2>
         
        <a
          href="#contact"
          className="w-fit px-6 py-4 bg-blue-900 text-white rounded-md hover:bg-blue-700 hover:text-blue-950 transition font-medium"
        >
          Contact Me
        </a>
         

        
        <div className="flex flex-col bg-white/50 gap-2 mt-10 alighn-left p-4 rounded-md w-fit">
          <div className="flex gap-2">
          <div className="flex flex-col border-r-2 w-1.5/10 px-5 py-3 items-start gap-2">
            <span className="text-blue-900 font-semibold">Email:</span>
            <span className="text-white font-light">salayohub@gmail.com</span>
          </div>

        

          <div className="flex flex-col border-r-2 w-1.5/10  px-5 py-3 items-start gap-2">
            <span className="text-blue-900 font-semibold">Phone:</span>
            <span className="text-white font-light">08147951626</span>
          </div>
          

          <div className="flex flex-col w-1.5/10  px-5 py-3 items-start gap-2">
            <span className="text-blue-700 font-semibold">Location:</span>
            <span className="text-white font-light">Lagos, Nigeria</span>
          </div>
          </div>

          {/* social icon */}
          <div className=" md:hidden flex flex-col items-start mt-6">
          <div className="flex items-center gap-2 ">
                    <span className="text-12px tracking-widest  rotate-0 md:-rotate-270 text-white">FOLLOW ME</span>
                    <div className="hidden md:block w-px mx-1 h-15 bg-black"></div>
                  </div>
          
                  <div className="flex md:flex-col gap-3">
                    {[FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaLinkedinIn].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-700 hover:text-blue-950 transition"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                    </div>
                  </div>
          <div>

          </div>
          </div>


          </div>
    
    </section>
  );
}
