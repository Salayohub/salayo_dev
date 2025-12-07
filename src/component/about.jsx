import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function AboutSection() {
  const fullText = `I am a passionate Frontend Developer with over 4 years of experience in creating
  dynamic and responsive web applications. My expertise lies in HTML, CSS, JavaScript,
  React, and Next.js, enabling me to build user-friendly interfaces that enhance user
  experience. In addition to my development skills, I am also a certified Cloud Practitioner
  and an AI Prompt Specialist, which allows me to integrate modern technologies into my
  projects effectively. I am committed to continuous learning and staying updated with
  the latest industry trends to deliver innovative solutions that meet client needs.`;

  const [showMore, setShowMore] = useState(false);
  const previewText = fullText.split(" ").slice(0, 60).join(" ") + "...";

  
  return (
    <section id="about" className="w-full bg-white flex flex-col md: p-6 lg:pt-35 pb-20 gap-10 lg:pl-35 pr-25  md:pl-30">
      {/* TOP ABOUT SECTION */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* IMAGE */}
        <div className="w-full md:w-[40%] h-auto md:h-auto bg-gray-300 rounded-xl overflow-hidden">
          <img src="/assets/aboutpnd.png" alt="Profile" className="w-full h-130 object-cover" />
        </div>

        {/* ABOUT TEXT */}
        <div className="w-full md:w-[60%] flex flex-col gap-5">
          <h2 className="text-blue-900 text-3xl font-bold">Who Am I?</h2>

          <h3 className="text-black text-2xl font-bold leading-snug">
            I'm Abdulkareem Salahudeen Busayo, a Frontend Developer / Cloud Practitioner & AI Prompt Specialist
          </h3>

          <p className="text-gray-400 leading-relaxed">{showMore ? fullText : previewText}</p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 text-blue-900 font-semibold w-fit hover:text-blue-700 transition"
          >
            {showMore ? "Show Less" : "Show More"}
            {showMore ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          <div className="w-full  `h-1` bg-blue-900 my-4"></div>

          <div className="flex flex-col gap-1 text-gray-400">
            <p className="text-black font-semibold">Name: <span className="text-gray-400">Abdulkareem Salahudeen Busayo</span></p>
            <p className="text-black font-semibold">Email: <span className="text-gray-400">abdulkareem@example.com</span></p>
          </div>

          <a href="/cv.pdf" download className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700 hover:text-blue-950 transition w-fit">
            Download CV
          </a>
        </div>
      </div>

      
      
    </section>
  );
}
