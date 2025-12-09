import React from "react";

export default function MySkill() {
  const skillsColumn1 = [
    { name: "WordPress", level: 95 },
    { name: "HTML", level: 97 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 85 },
  ];

  const skillsColumn2 = [
    { name: "React JS", level: 88 },
    { name: "Next JS", level: 82 },
    { name: "AI Prompt", level: 75 },
    { name: "Version Control (Git)", level: 85 },
    { name: "Cloud Practitioner", level: 75 },
  ];

  return (
    <section id="skills" className="w-full py-16 bg-white md:pl-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="text-blue-900 text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* First Column */}
          <div className="flex flex-col gap-6">
            {skillsColumn1.map((skill, i) => (
              <div key={i} className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800 font-semibold text-lg">
                    {skill.name}
                  </span>
                  <span className="text-blue-900 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-900 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-6">
            {skillsColumn2.map((skill, i) => (
              <div key={i} className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800 font-semibold text-lg">
                    {skill.name}
                  </span>
                  <span className="text-blue-900 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-900 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}