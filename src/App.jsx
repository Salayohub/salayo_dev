
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import HeroSection from './component/Hero'


export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />
      <HeroSection />
      <Footer />
     
    </div>
  )
}
