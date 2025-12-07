import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import BackButton from "../component/BackButton";


export default function SingleProject() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="p-10 text-center">Project not found</p>;

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <BackButton />

        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          {project.title}
        </h1>

        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* IMAGES */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-lg h-60 w-full object-cover"
            />
          ))}
        </div>

        {/* TOOLS */}
        <h2 className="text-xl font-semibold text-black mb-2">Tools Used</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {project.tools.map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>

        {/* PROCESS */}
        <h2 className="text-xl font-semibold text-black mt-8 mb-2">
          Development Process
        </h2>
        <ul className="list-decimal pl-5 text-gray-600">
          {project.process.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>

        {/* CONTACT */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-black mb-4">
            Contact Me About This Project
          </h2>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="border p-3 rounded-lg h-32"
            ></textarea>
            <button className="bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
