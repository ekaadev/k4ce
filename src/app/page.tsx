import ProjectList from "@/components/sections/project-list";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto md:px-44 px-8">
      {/* Profile */}
      <section
        id="profile"
        className="flex flex-col-reverse gap-4 py-[2rem] md:flex-row md:gap-8 md:py-[8rem] justify-between items-center"
      >
        {/* Left Side */}
        <div className="gap-6 flex flex-col max-w-2xl">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-5xl text-2xl">Yohanes Eka Putra</h1>
            <h5 className="text-xl md:text-3xl font-medium">
              Software Engineer
            </h5>
          </div>
          <p className="text-sm font-medium text-gray-700">
            I am a Software Engineer specializing in <b> Web Development</b>. My
            passion also extends to <b>Game Development</b>. Feel free to
            explore my projects to see my skills in action.
          </p>
          <Button className="w-fit">Let&apos;s work together</Button>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://www.instagram.com/_yohanesseka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/ekaadev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yohanes-eka-putra-85952128a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full flex justify-center">
          <div className="relative w-32 h-32 md:w-72 md:h-72 max-w-full">
            <Image
              src="/notion-face-transparent.png"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover bg-white border-2 border-zinc-300"
              sizes="(max-width: 768px) 128px, 288px"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h1 className="md:text-2xl text-lg">
          Here are some of my recent projects
        </h1>
        {/* List of Proejcts */}
        <ProjectList />
      </section>

      {/* Footer */}
      <footer className="pt-[2rem] md:pt-[8rem] pb-8 text-start">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Yohanes Eka Putra.
        </p>
      </footer>
    </div>
  );
}
