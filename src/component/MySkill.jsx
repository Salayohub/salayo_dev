// import React from "react";

// export default function MySkill() {
//   const skillsColumn1 = [
//     { name: "WordPress", level: 95 },
//     { name: "HTML", level: 97 },
//     { name: "CSS", level: 90 },
//     { name: "JavaScript", level: 80 },
//     { name: "TypeScript", level: 85 },
//   ];

//   const skillsColumn2 = [
//     { name: "React JS", level: 88 },
//     { name: "Next JS", level: 82 },
//     { name: "AI Prompt", level: 75 },
//     { name: "Version Control (Git)", level: 85 },
//     { name: "Cloud Practitioner", level: 75 },
//   ];

//   return (
//     <section id="skills" className="w-full py-16 bg-white md:pl-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
//         <h2 className="text-blue-900 text-3xl md:text-4xl font-bold mb-12 text-center">
//           My Skills
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//           {/* First Column */}
//           <div className="flex flex-col gap-6">
//             {skillsColumn1.map((skill, i) => (
//               <div key={i} className="w-full">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-gray-800 font-semibold text-lg">
//                     {skill.name}
//                   </span>
//                   <span className="text-blue-900 font-bold">{skill.level}%</span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-blue-900 rounded-full transition-all duration-1000 ease-out"
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Second Column */}
//           <div className="flex flex-col gap-6">
//             {skillsColumn2.map((skill, i) => (
//               <div key={i} className="w-full">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-gray-800 font-semibold text-lg">
//                     {skill.name}
//                   </span>
//                   <span className="text-blue-900 font-bold">{skill.level}%</span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-blue-900 rounded-full transition-all duration-1000 ease-out"
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// skill section style 2

import React from "react";


import { 
  SiWordpress, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiGit,
  // SiAmazonaws
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";

export default function MySkill() {
  const skills = [
    { 
      name: "WordPress", 
      icon: SiWordpress,
      color: "text-[#21759B]",
      bgColor: "bg-[#21759B]/10",
      category: "CMS"
    },
    // { 
    //   name: "HTML", 
    //   icon: SiHtml5,
    //   color: "text-[#E34F26]",
    //   bgColor: "bg-[#E34F26]/10",
    //   category: "Frontend"
    // },
    // { 
    //   name: "CSS", 
    //   icon: SiCss3,
    //   color: "text-[#1572B6]",
    //   bgColor: "bg-[#1572B6]/10",
    //   category: "Frontend"
    // },
    { 
      name: "JavaScript", 
      icon: SiJavascript,
      color: "text-[#F7DF1E]",
      bgColor: "bg-[#F7DF1E]/10",
      category: "Language"
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript,
      color: "text-[#3178C6]",
      bgColor: "bg-[#3178C6]/10",
      category: "Language"
    },
    { 
      name: "React JS", 
      icon: SiReact,
      color: "text-[#61DAFB]",
      bgColor: "bg-[#61DAFB]/10",
      category: "Framework"
    },
    { 
      name: "Next JS", 
      icon: SiNextdotjs,
      color: "text-black",
      bgColor: "bg-gray-100",
      category: "Framework"
    },
    // { 
    //   name: "AI Prompt Engineering", 
    //   icon: TbBrain,
    //   color: "text-purple-600",
    //   bgColor: "bg-purple-100",
    //   category: "AI"
    // },
    { 
      name: "Version Control (Git)", 
      icon: SiGit,
      color: "text-[#F05032]",
      bgColor: "bg-[#F05032]/10",
      category: "Tools"
    },
    // { 
    //   name: "Cloud Practitioner", 
    //   icon: SiAmazonaws,
    //   color: "text-[#FF9900]",
    //   bgColor: "bg-[#FF9900]/10",
    //   category: "Cloud"
    // },
  ];

  return (
    <section id="skills" className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-900 text-3xl md:text-4xl font-bold mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-900/20 hover:-translate-y-2"
              >
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold text-gray-400">
                    {skill.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`${skill.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${skill.color} text-3xl`} />
                </div>

                {/* Skill Name */}
                <h3 className="text-gray-800 font-semibold text-sm leading-tight">
                  {skill.name}
                </h3>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Optional: Skill Categories Summary */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["Frontend", "Framework", "Language", "Tools", "Cloud", "CMS", "AI"].map((category) => (
            <div
              key={category}
              className="px-4 py-2 bg-blue-900/5 rounded-full text-sm font-medium text-blue-900"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}