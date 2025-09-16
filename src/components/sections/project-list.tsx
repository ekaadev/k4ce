import Image from "next/image";

import { FaAngleRight } from "react-icons/fa6";

const ProjectList = () => {
  const projects = [
    {
      title: "Hegai: Generative AI",
      image:
        "/github-img.webp", // Replace with actual image path
      year: "Jun 2025 - Sep 2025",
      link: "https://github.com/commrade-goad/r1-ai",
      role: "Full Stack Developer",
    },
    {
      title: "Clean Shoe",
      image: "/clean-shoe.jpg", // Replace with actual image path
      year: "Mar 2025 - Aug 2025",
      link: "https://clean-shoe.vercel.app/",
      role: "Full Stack Developer",
    },
    {
      title: "Kaen",
      image: "/github-img.webp", // Replace with actual image path
      year: "Sep 2024 - Jan 2025",
      link: "https://ek4ce.itch.io/kaen",
      role: "Lead Game Developer", },
    {
      title: "Giros",
      image:
        "https://img.itch.zone/aW1nLzE5Njk4OTk3LnBuZw==/347x500/fZKlNC.png", // Replace with actual image path
      year: "Sep 2024 - Feb 2025",
      link: "https://developerinformatikaukdc.itch.io/giros",
      role: "Mobile Developer",
    },
  ];

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div className="flex flex-row gap-4 items-center" key={index}>
          {/* img-project */}
          <div className="relative w-12 h-12 shrink-0">
            <Image
              src={project.image}
              alt="Education Picture"
              fill
              className="rounded-full object-cover border border-gray-400/40"
              unoptimized
            />
          </div>
          {/* description */}
          <div className="w-full space-y-0.5">
            {/* title and period */}
            <div className="flex flex-row justify-between">
              <a
                className="flex items-center group cursor-pointer"
                href={project.link}
                target="_blank"
              >
                <p className="font-bold text-sm md:text-base">
                  {project.title}
                </p>
                <FaAngleRight className="inline-block ml-1 text-gray-500 opacity-0 transform translate-x-[-5px] transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out" />
              </a>
              <span className="font-normal font-mono text-xs md:text-sm text-gray-500">
                {project.year}
              </span>
            </div>
            <p className="font-normal text-xs md:text-sm text-gray-500">
              {project.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
