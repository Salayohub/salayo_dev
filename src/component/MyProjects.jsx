import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 md:pl-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        {/* Grid (show only first 3 projects) */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* VIEW MORE */}
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
