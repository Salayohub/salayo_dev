import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function AboutSection() {
  const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const [showMore, setShowMore] = useState(false);
  const previewText = fullText.split(" ").slice(0, 60).join(" ") + "...";

  const skills = [
    "WordPress",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next JS",
    "AI Prompt",
    "Cloud Practitioner",
  ];

  const ResumeCard = ({ title, subtitle, text }) => (
    <div className="border-l-4 border-blue-900 pl-4 pb-5 mb-5 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-900 rotate-45"></div>
        <h4 className="text-black font-bold text-xl">{title}</h4>
      </div>
      <h5 className="text-blue-900 font-semibold">{subtitle}</h5>
      <p className="text-gray-400 mt-1">{text}</p>
    </div>
  );

  return (
    <section id="about" className="w-full bg-white flex flex-col md: p-6 lg:pt-35 pb-20 gap-10 lg:pl-35 pr-25  md:pl-30">
      {/* TOP ABOUT SECTION */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* IMAGE */}
        <div className="w-full md:w-[30%] h-[400px] md:h-auto bg-gray-300 rounded-xl overflow-hidden">
          <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* ABOUT TEXT */}
        <div className="w-full md:w-[70%] flex flex-col gap-5">
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

          <div className="w-full h-[4px] bg-blue-900 my-4"></div>

          <div className="flex flex-col gap-1 text-gray-400">
            <p className="text-black font-semibold">Name: <span className="text-gray-400">Abdulkareem Salahudeen Busayo</span></p>
            <p className="text-black font-semibold">Email: <span className="text-gray-400">abdulkareem@example.com</span></p>
          </div>

          <a href="/cv.pdf" download className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700 hover:text-blue-950 transition w-fit">
            Download CV
          </a>
        </div>
      </div>

      {/* RESUME SECTION */}
      <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
        {/* EDUCATION */}
        <div className="w-full md:w-1/2">
          <h2 className="text-blue-900 text-2xl font-bold mb-5">Education</h2>

          <ResumeCard
            title="B.Sc Computer Science"
            subtitle="University of Lagos 2015 - 2019"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <ResumeCard
            title="Frontend Certification"
            subtitle="Udemy / Coursera"
            text="Completed advanced frontend development courses."
          />

          <ResumeCard
            title="Cloud Practitioner"
            subtitle="AWS Training Program"
            text="Hands-on foundational cloud knowledge in AWS services."
          />
        </div>

        {/* EXPERIENCE */}
        <div className="w-full md:w-1/2">
          <h2 className="text-blue-900 text-2xl font-bold mb-5">Experience</h2>

          <ResumeCard
            title="Frontend Developer"
            subtitle="Freelance 2020 - Present"
            text="Worked with clients building responsive and scalable websites."
          />

          <ResumeCard
            title="Cloud Practitioner"
            subtitle="AWS / Personal Projects"
            text="Built cloud-hosted projects using EC2, S3, IAM, and more."
          />

          <ResumeCard
            title="AI Prompt Specialist"
            subtitle="Private Clients"
            text="Created optimized AI prompts for automation and productivity."
          />
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="mt-10 w-full md:w-1/2">
        <h2 className="text-blue-900 text-2xl font-bold mb-5">My Skills</h2>

        <div className="flex flex-col gap-5">
          {skills.map((skill, i) => (
            <div key={i} className="w-full">
              <div className="flex justify-between">
                <span className="text-black font-semibold">{skill}</span>
                <span className="text-blue-900 font-bold">90%</span>
              </div>
              <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden mt-1">
                <div className="h-full bg-blue-900 w-[90%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
