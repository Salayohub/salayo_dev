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
    <section id="home" className="w-full h-[80vh] bg-gray-200 flex flex-col md:flex-row p-5 md:p-10">
      {/* SOCIAL ICONS */}
      <div className="w-full md:w-[5%] flex md:flex-col justify-center items-center gap-4 md:gap-6 mb-5 md:mb-0">
        <div className="flex md:flex-col items-center gap-2">
          <span className="text-sm tracking-widest rotate-0 md:-rotate-90 text-black">FOLLOW ME</span>
          <div className="hidden md:block w-px h-20 bg-black"></div>
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

      {/* TEXT SECTION */}
      <div className="w-full md:w-[45%] flex flex-col justify-center gap-4">
        <h1 className="text-4xl font-bold text-black">Hello There!</h1>

        <h2 className="text-2xl font-semibold text-black">
          I am a <span className="text-blue-900 font-bold">{displayText}</span>
        </h2>

        <p className="text-gray-400 text-lg">I make the complex simple.</p>

        <a
          href="#contact"
          className="w-fit px-5 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 hover:text-blue-950 transition font-medium"
        >
          Contact Me
        </a>

        <div className="flex flex-col gap-2 mt-4 text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold">Email:</span>
            <span>salayohub@gmail.com</span>
          </div>
          <div className="w-full h-px bg-black/20"></div>

          <div className="flex items-center gap-2">
            <span className="text-black font-semibold">Phone:</span>
            <span>+234 814 795 1626</span>
          </div>
          <div className="w-full h-px bg-black/20"></div>

          <div className="flex items-center gap-2">
            <span className="text-black font-semibold">Location:</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="hidden md:flex w-[50%] justify-center items-center">
        <div className="w-72 h-72 bg-blue-300 rounded-xl"></div>
      </div>
    </section>
  );
}
