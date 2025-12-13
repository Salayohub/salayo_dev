import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all relative group">
      
      {/* Image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className=" bg-blue-900 group-hover:opacity-100 transition-all flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-200 text-sm">{project.category}</p>

        <Link
          to={`/project/${project.id}`}
          className="mt-3 inline-flex items-center font-bold gap-2 text-white hover:underline"
        >
          View Details <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}
