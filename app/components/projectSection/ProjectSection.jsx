import React from "react";
import ProjectCard from "./projectCard";
const projectData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description:
      "A responsive and dynamic portfolio Website powered by Nextjs 13,enhanced with TypeScript and styled with Tailwind CSS  ",
    image: "/assets/images/projects/p3.png",
    gitUrl: "https://github.com/adamelomar98/My-Portfolio",
    previewUrl: "https://adamelomar.com/",
  },
  {
    id: 2,
    title: "Full Stack E-Commercs Website",
    description:
      "A Full Stack E-Commerce website with admin dashboard powered by Nextjs 13 and MySql database, enhanced with TypeScript and styled with Tailwind CSS  ",
    image: "/",
    gitUrl: "https://github.com/adamelomar98/FULLSTACK-ECOMMERCE",
    previewUrl: "/",
  },
];
const ProjectSection = () => {
  return (
    <section id="project" className=" pt-24 px-4  xl:px-16">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12">
        My Project
      </h2>
      <div className="grid   lg:grid-cols-2 gap-8 lg:gap-12  ">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
