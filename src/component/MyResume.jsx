import React from "react";

export default function MyResume() {
  const ResumeCard = ({ title, subtitle, text }) => (
    <div className="border-l-4 border-gray-300 pl-4 pb-5 mb-5 border-b ">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-900 rotate-45"></div>
        <h4 className="text-black font-bold text-xl">{title}</h4>
      </div>
      <h5 className="text-blue-900 font-semibold">{subtitle}</h5>
      <p className="text-gray-400 mt-1">{text}</p>
    </div>
  );

  return (
    <>
      {/* RESUME SECTION */}
      <section id="resume" className="w-full p-6 py-16 bg-white">
        <h2 className="text-4xl md:text-5xl md:pl-30 font-bold text-gray-900 mb-4">
            My Resume
          </h2>

          <div className="w-20 h-1 bg-blue-900  lg:ml-35"></div>
        <div className="w-full flex flex-col md:flex-row gap-10 mt-10 md:px-30 lg:px-35">
          {/* EDUCATION */}
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-900 text-2xl font-bold mb-5">Education</h2>

            <ResumeCard
              title="B.Sc Computer Science"
              subtitle="University of Lagos 2015 - 2019"
              text="Lorem ipsum dolor sit amet."
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
              text="Built responsive and scalable websites."
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
      </section>
    </>
  );
}
