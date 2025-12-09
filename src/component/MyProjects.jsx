import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

export default function ProjectSection() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50 md:pl-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            onClick={scrollToTop}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
