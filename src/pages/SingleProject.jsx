import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SingleProject() {
  const { id } = useParams();
  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  if (!project)
    return <div className="text-center py-20 text-xl">Project not found</div>;

  // Previous / Next Logic
  const prevProject = projects[currentIndex - 1] || null;
  const nextProject = projects[currentIndex + 1] || null;

  return (
    <div className="py-20 max-w-6xl pl-20 mx-auto px-4 pl:20 md:pl">
      {/* JSON-LD SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "CreativeWork",
          name: project.title,
          image: project.images,
          description: project.description,
          genre: project.category,
          datePublished: project.date,
          keywords: project.Technologies?.join(", "),
        })}
      </script>

      {/* Back Button */}
      <Link to="/projects" className="flex items-center gap-2 text-blue-900 mb-8">
        <FiArrowLeft /> Back to Projects
      </Link>

      {/* Main Image */}
      <motion.img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-80 object-cover rounded-lg shadow"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Title + Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold mt-6">{project.title}</h1>
        <p className="text-gray-600 text-lg mt-2">{project.category}</p>
      </motion.div>

      {/* Description */}
      <motion.p
        className="mt-6 text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {project.description}
      </motion.p>

      {/* Technologies */}
      {project.Technologies && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.Technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

    {/* Project process */}
      {project.process && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Project Process</h2>
          <div className="flex flex-col gap-4">
            {project.process.map((step, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold mb-2">Step {i + 1}</h3>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* FULL GALLERY
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.images?.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-full h-48 object-cover rounded-lg shadow cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            />
          ))}
        </div>
      </div> */}

      {/* livedemo link  */}
      <div className="text-center mt-8">
                <Link
                  to={project.Link}
                  className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Live Demo
                </Link>
              </div>



      {/* PREV / NEXT NAVIGATION */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t">
        {/* Previous Project */}
        {prevProject ? (
          <Link
            to={`/project/${prevProject.id}`}
            className="flex items-center gap-2 text-blue-800 hover:text-blue-600"
          >
            <FiChevronLeft size={22} /> {prevProject.title}
          </Link>
        ) : (
          <span className="text-gray-400">No previous project</span>
        )}

        {/* Next Project */}
        {nextProject ? (
          <Link
            to={`/project/${nextProject.id}`}
            className="flex items-center gap-2 text-blue-800 hover:text-blue-600"
          >
            {nextProject.title} <FiChevronRight size={22} />
          </Link>
        ) : (
          <span className="text-gray-400">No more projects</span>
        )}
      </div>
    </div>
  );
}
