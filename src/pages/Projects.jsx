import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../component/ProjectCard";
import { projects } from "../data/projects";
import BackButton from "../component/BackButton";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
<BackButton />

       <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Projects</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
