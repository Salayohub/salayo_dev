import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function AboutSection() {
  const fullText = `I am a passionate Frontend Developer with over 6 years of experience in wordpress developmentand also creating
  dynamic and responsive web applications.
  
  Over the past year, I’ve worked consistently on projects, combining both Cloud Computing (AWS) and Frontend Development to design practical systems that perform efficiently in real-world environments.

On the frontend, I specialize in HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, TypeScript, GitHub, and Node.js, enabling me to develop modern, responsive, and user-centric web applications. Combining cloud knowledge with software development allows me to build solutions that are not only visually engaging but also optimized for reliability, performance, deployment, and real-world scalability.

On the cloud side, I’ve successfully deployed both static and dynamic websites, implemented secure and well-architected AWS environments, and worked extensively with services such as EC2, S3, IAM, VPC, CloudFront, Route 53, and RDS. I’m also experienced in configuring networks with proper security groups, subnets, and routing to ensure high availability and strong security.

As a passionate Cloud Practitioner and aspiring Solutions Architect, I specialize in designing and deploying scalable, secure, and efficient cloud solutions. My hands-on experience spans across cloud infrastructure, web hosting, and application deployment—allowing me to bring both technical depth and practical problem-solving to every project.

My skill set bridges the gap between application development and cloud infrastructure. I understand how frontend applications interact with backend services, APIs, and cloud-based environments, allowing me to design end-to-end systems that deliver seamless user experiences. I enjoy implementing CI/CD pipelines, serverless architectures, containerized workloads, and cloud-native patterns that align with industry standards.

Driven by continuous learning, I am committed to advancing my expertise in cloud architecture, security, automation, and distributed systems while contributing solutions that solve practical business problems. My mission is to help organizations build efficient, future-ready applications through a blend of strong frontend engineering and cloud-first architectural thinking

🔹 Always open to global remote roles, collaboration, and freelance projects in frontend or cloud development.

📫 Let’s connect and build something great.`;

  const [showMore, setShowMore] = useState(false);
  const previewText = fullText.split(" ").slice(0, 60).join(" ") + "...";

  
  return (
    <section id="about" className="w-full bg-white flex flex-col md: p-6 lg:pt-35 pb-20 gap-4 lg:pl-35 md:pr-25  md:pl-30">

       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>
      {/* TOP ABOUT SECTION */}
      <div className="flex flex-col md:flex-col w-full  lg:flex-row  gap-10">
        {/* IMAGE */}
        <div className="w-full md:w-full h-auto md:h-auto  rounded-xl overflow-hidden flex items-center justify-center">
          <img src="/assets/aboutimg4.png" alt="Profile" className="rounded-full w-100 h-100 object-cover md:hidden" />
<img src="/assets/aboutimg5.png" alt="Profile" className="hidden md:block md:rounded-t-full" />


        </div>

        {/* ABOUT TEXT */}
        <div className="w-full  flex flex-col gap-5">
          <h2 className="text-blue-900 text-3xl font-bold">Who Am I?</h2>

          <h3 className="text-black text-2xl font-semi-bold leading-snug">
           HI!! My name is Salahudeen Abdulkareeem .B. I’m a passionate <span className="text-blue-900">Frontend Web Developer || Wordpress developer || Cloud Practitioner .</span> dedicated to building reliable, scalable, and user-friendly digital solutions.
          </h3>

          <p className="text-gray-900 leading-relaxed">{showMore ? fullText.split("\n\n").map((paragraph, index) => (
              <span key={index}>
                {paragraph}
                <br /><br />
              </span>
            )) : previewText}</p>

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
            <p className="text-black font-semibold">Email: <span className="text-gray-400">salayo4real@gmail.com</span></p>
          </div>

          <a href="/cv.pdf" download className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700 hover:text-blue-950 transition w-fit">
            Download My CV
          </a>
        </div>
      </div>

      
      
    </section>
  );
}
