import React from "react";
import { FaLaptopCode, FaWordpress, FaCloud , FaCheckCircle } from "react-icons/fa";

export default function MyService() {
  return (
    <section id="services" className="w-full py-16 bg-white md:pl-20">
      {/* SECTION TITLE */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Professional Services I Offer
        </h2>

        {/* SERVICES CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

         {/* Service 1 */}
<div className="p-6 border rounded-xl bg-white hover:shadow-[6px_6px_0px_0px_#1e3a8a] transition-all duration-300">
  <div className="text-blue-900 text-5xl mb-4">
    <FaLaptopCode />
  </div>
  <h2 className="text-xl font-semibold text-gray-800 mb-2">
    Frontend Web Development
  </h2>
  <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 Modern, responsive websites built with React, Next.js, Tailwind CSS, and JavaScript
  </li>
  <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 Conversion of UI/UX designs (Figma, Adobe XD) into high-quality frontend interfaces
  </li>
  <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />

Single Page Applications (SPA) and dynamic user experiences
  </li>
  <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
Performance optimization and clean, scalable code
  </li>
  
</div>

{/* Service 2 */}
<div className="p-6 border rounded-xl bg-white hover:shadow-[6px_6px_0px_0px_#1e3a8a] transition-all duration-300">
  <div className="text-blue-900 text-5xl mb-4">
    <FaWordpress />
  </div>
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    WordPress Website Development
  </h3>
   <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 
Custom WordPress websites tailored to business or personal needs
  </li>
   <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
Landing pages, blogs, eCommerce setups, and portfolio sites
  </li>
   <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 Website optimization for speed, SEO, and mobile responsiveness
  </li>
   <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 Website maintenance, updates, and troubleshooting
  </li>
   
</div>

{/* Service 3 */}
<div className="p-6 border rounded-xl bg-white hover:shadow-[6px_6px_0px_0px_#1e3a8a] transition-all duration-300">
  <div className="text-blue-900 text-5xl mb-4">
    <FaCloud  />
  </div>
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
   Cloud Deployment & Hosting Solutions
  </h3>
   <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 Deployment of static and dynamic websites on AWS (EC2, S3, CloudFront, Amplify)
  </li>
    <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
Secure and scalable cloud architectures following AWS best practices
  </li>
    <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 Domain management and DNS configuration (Route 53)
  </li>
   
    <li className="flex items-start gap-2">
<FaCheckCircle className="text-blue-900 mt-1" />
 Website migration, hosting setup, and continuous deployment (CI/CD)
  </li>
  
</div>


        </div>
      </div>

      {/* EXPERIENCE STATS SECTION */}
      <div className="w-full py-14 bg-gray-50 mt-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-10 rounded-2xl border 
            shadow-[8px_8px_0px_0px_#1e3a8a] text-center">

            <div className="grid md:grid-cols-3 gap-6">

              <div>
                <h3 className="text-4xl font-bold text-blue-900">4+</h3>
                <p className="text-gray-700 text-sm">Years of Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-900">10+</h3>
                <p className="text-gray-700 text-sm">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-900">10+</h3>
                <p className="text-gray-700 text-sm">Clients Worldwide</p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}