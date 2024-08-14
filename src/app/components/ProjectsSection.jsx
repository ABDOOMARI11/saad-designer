"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Resume writing",
    image: "/images/cv/1.jpeg",
    tag: ["All", "CV Making"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Logo design",
    image: "/images/logos/2.jpeg",
    tag: ["All", "CV Making"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Video editing",
    image: "/images/videos/1.jpeg",
    tag: ["All", "CV Making"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Reports making",
    image: "/images/reports/4.jpeg",
    tag: ["All", "Video Editing"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projectsData.length;
  const delay = 1500; // Délai en millisecondes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === totalProjects - 1) {
          return 0; // Retourne à l'index 0
        }
        return prevIndex+1; // Passe à l'index suivant
      });
    }, delay);
    return () => clearInterval(interval);
  }, [totalProjects]);

  return (
    <section id="services">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-10">
        My Services
      </h2>

      <div className="overflow-hidden relative h-[400px]">
        <motion.div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projectsData.map((project) => (
            <div key={project.id} className="min-w-full h-[700px] ">
              <ProjectCard
                title={project.title}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
