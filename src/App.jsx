import { Routes, Route } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa6";

import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";

import Home from "./pages/Home";      // ✅ You MUST import this
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";


export default function App() {

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/MrSalayo" },
  { icon: FaXTwitter, url: "https://x.com/salayo72" },
  { icon: FaInstagram, url: "https://www.instagram.com/salayo_?igsh=cnZzZDhzbnF3eXlq" },
  { icon: FaTiktok, url: "https://tiktok.com/@mr_salayo" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/abdulkareem-salahudeen/" },
];

  return (
    <div className="bg-white">

      {/* SOCIAL ICONS */}
     <div className="hidden md:flex flex-col items-center gap-6 fixed left-0 top-1/3 -translate-y-1/2 z-50">

  <div className="flex md:flex-col items-center py-12">
    <span className="text-12px tracking-widest md:-rotate-270 text-black">
      FOLLOW ME
    </span>
  </div>

  <div className="flex md:flex-col gap-3">
    {socialLinks.map(({ icon: Icon, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-700 transition"
      >
        <Icon size={18} />
      </a>
    ))}
  </div>
</div>


      <Navbar />
      

      {/* ROUTING STARTS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>

      

     
      

      {/* <Footer /> */}
    </div>
  );
}
