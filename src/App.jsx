import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa6";
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import HeroSection from './component/Hero'
import AboutSection from './component/about'


export default function App() {
  return (
    <div className=" bg-white">
       {/* SOCIAL ICONS */}
      <div className="hidden md:flex flex-col items-center gap-6 fixed left-0 top-1/3 -translate-y-1/2 z-50">
        <div className="flex md:flex-col items-center py-12">
          <span className="text-12px tracking-widest rotate-0 md:-rotate-270 text-black">FOLLOW ME</span>
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
      <div className=" ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
      </div>
     
    </div>
  )
}
