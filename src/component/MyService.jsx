import React from "react";
import { FaLaptopCode, FaBullhorn, FaBrain } from "react-icons/fa";

export default function MyService() {
  return (
    <section id="services" className="w-full py-16 bg-white">
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
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    Website Development & Design
  </h3>
  <p className="text-gray-600 text-sm leading-relaxed">
    I design and develop responsive, SEO-optimized websites...
  </p>
</div>

{/* Service 2 */}
<div className="p-6 border rounded-xl bg-white hover:shadow-[6px_6px_0px_0px_#1e3a8a] transition-all duration-300">
  <div className="text-blue-900 text-5xl mb-4">
    <FaBullhorn />
  </div>
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    Digital Marketing & SEO Optimization
  </h3>
  <p className="text-gray-600 text-sm leading-relaxed">
    I help brands grow online through strategic SEO...
  </p>
</div>

{/* Service 3 */}
<div className="p-6 border rounded-xl bg-white hover:shadow-[6px_6px_0px_0px_#1e3a8a] transition-all duration-300">
  <div className="text-blue-900 text-5xl mb-4">
    <FaBrain />
  </div>
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    AI Automation & Prompt Engineering
  </h3>
  <p className="text-gray-600 text-sm leading-relaxed">
    I build smart AI workflows, create high-quality prompts...
  </p>
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