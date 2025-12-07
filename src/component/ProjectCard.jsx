import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-all p-4">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="rounded-lg h-48 w-full object-cover"
      />

      <h3 className="text-xl font-semibold text-gray-800 mt-4">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm mt-2">{project.category}</p>

      <Link
        to={`/project/${project.id}`}
        className="mt-4 flex items-center gap-2 text-blue-900 font-medium"
      >
        View Details <FiArrowRight />
      </Link>
    </div>
  );
}
