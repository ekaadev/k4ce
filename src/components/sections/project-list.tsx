import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

const ProjectList = () => {
  const projects = [
    {
      title: "Kaen",
      image: "/kaen-img.png", // Replace with actual image path
      description: "An rouglike game made with Godot Engine",
      technologies: ["Godot Engine", "Godot Script", "Aseprite"],
      link: "https://ek4ce.itch.io/kaen",
    },
    {
      title: "Clean Shoe",
      image: "/clean-shoe-img.png", // Replace with actual image path
      description: "An service application for shoe cleaning",
      technologies: ["Svelte Kit", "Typescript", "Supabase", "Tailwind CSS"],
      link: "https://clean-shoe.vercel.app/",
    },
    {
      title: "MBTI Test",
      image: "/mbti-img.png", // Replace with actual image path
      description: "An web application for MBTI personality test",
      technologies: ["Svelte Kit", "Typescript", "Tailwind CSS"],
      link: "https://ukdc-kbu-mbti-1.joelmedia.my.id/",
    },
    {
      title: "Giros",
      image: "/giros-img.png", // Replace with actual image path
      description: "An application for rate your github profile",
      technologies: ["Kotlin", "Android Studio"],
      link: "https://developerinformatikaukdc.itch.io/giros",
    },
    {
      title: "Eisenhower Todo API",
      image: "/github-img.webp", // Replace with actual image path
      description:
        "An RESTful API for managing tasks using the Eisenhower Matrix",
      technologies: ["Go", "Http Router", "PostgreSQL"],
      link: "https://github.com/ekaadev/eisenhower-todo-api",
    },
    {
      title: "My Pocket API",
      image: "/github-img.webp", // Replace with actual image path
      description: "An RESTful API for my pocket application",
      technologies: ["Express JS", "Javascript"],
      link: "https://github.com/ekaadev/my-pocket-backend",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:items-stretch">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="my-2 w-full max-w-xs sm:max-w-sm flex flex-col flex-1"
        >
          <CardContent>
            <div className="aspect-[16/9] w-full mb-4 rounded-lg overflow-hidden relative border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 320px"
              />
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="text-zinc-600">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className=" flex-1">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex}>{tech}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-end">
            <Button asChild>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium"
              >
                View Project
                <FaArrowRight className="ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
