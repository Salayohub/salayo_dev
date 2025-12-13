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
      <section id="resume" className="w-full p-6 py-16 bg-blue-100">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-10 mt-10 md:px-30 lg:px-35">
          {/* EDUCATION */}
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-900 text-2xl font-bold mb-5">Education</h2>

            <ResumeCard
              title="H.N.D ELECTRICAL ENGINEERING"
              subtitle="Naval Institute of Technology (NIT)2016 - 2019"
              text="Focused on developing solid technical skills  and safety  compliance"
            />

            <ResumeCard
              title="Frontend Certification"
              subtitle="ALX AFRICA"
              text="Completed advanced frontend development courses."
            />

            <ResumeCard
              title="Cloud Practitioner"
              subtitle="AWS Training Program/ ALX AFRICA"
              text="Hands-on foundational cloud knowledge in AWS services."
            />
          </div>

          {/* EXPERIENCE */}
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-900 text-2xl font-bold mb-5">Experience</h2>

            <ResumeCard
              title="Frontend Developer"
              subtitle="Freelance 2024 - Present"
              text="Built responsive and scalable websites."
            />

            <ResumeCard
              title="Cloud Practitioner"
              subtitle="AWS / Personal Projects"
              text="Built cloud-hosted projects using EC2, S3, IAM, and more."
            />

            <ResumeCard
              title="Wordpress Developer"
              subtitle="Freelance 2020 - Present"
              text="Created optimized AI prompts for automation and productivity."
            />
          </div>
        </div>
      </section>
    </>
  );
}
