import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../component/ProjectCard";
import BackButton from "../component/BackButton";

export default function Projects() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <BackButton />

        <h1 className="text-3xl font-bold text-blue-900 mb-10">
          All Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}
