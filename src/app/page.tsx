"use client";

import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { IoCodeOutline } from "react-icons/io5";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import EducationList from "@/components/sections/education-list";
import ProjectList from "@/components/sections/project-list";
import SkillList from "@/components/sections/skill-list";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4">
      {/* Navigation */}
      <nav className="fixed top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 border max-w-[3rem] px-6 rounded-xl bg-gray-100">
        <div className="flex flex-col items-center space-y-0.5 py-2">
          <a
            href="#profile"
            className="p-2 hover:bg-gray-300 hover:rounded-full transition-all duration-150 ease-in-out"
          >
            <CgProfile className="text-2xl text-gray-500" />
          </a>
          <a
            href="#education"
            className="p-2 hover:bg-gray-300 hover:rounded-full transition-all duration-150 ease-in-out"
          >
            <FaBookOpen className="text-2xl text-gray-500" />
          </a>
          <a
            href="#projects"
            className="p-2 hover:bg-gray-300 hover:rounded-full transition-all duration-150 ease-in-out"
          >
            <IoCodeOutline className="text-2xl text-gray-500" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-0.5 py-2">
          <a
            href="https://www.instagram.com/_yohanesseka/"
            target="_blank"
            className="p-2 hover:bg-gray-300 hover:rounded-full transition-all duration-150 ease-in-out"
          >
            <FaInstagram className="text-2xl text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/yohanes-eka-putra-85952128a/"
            target="_blank"
            className="p-2 hover:bg-gray-300 hover:rounded-full transition-all duration-150 ease-in-out"
          >
            <FaLinkedin className="text-2xl text-gray-500" />
          </a>
          <a
            href="https://github.com/ekaadev"
            target="_blank"
            className="p-2 hover:bg-gray-300 hover:rounded-full transition-all duration-150 ease-in-out"
          >
            <FaGithub className="text-2xl text-gray-500" />
          </a>
        </div>
      </nav>

      {/* Profile */}
      <section
        id="profile"
        className="flex flex-row pt-[2rem] md:pt-[4rem] justify-between items-center"
      >
        {/* Left Side */}
        <div className="gap-6 flex flex-col w-full flex-2">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-4xl text-2xl">Hi, I&apos;m Eka</h1>
            <h5 className="text-sm md:text-lg font-medium">
              Computer Science Student, Software Engineer
            </h5>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full flex justify-end flex-1">
          <div className="relative w-12 h-12 md:w-36 md:h-36 max-w-full">
            <Image
              src="/profile-github.png"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border border-zinc-300"
              sizes="(max-width: 768px) 128px, 288px"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-4">
        <h2 className="text-xl">About</h2>
        <hr className="items-center my-1" />
        <p className="text-sm font-normal text-gray-700">
          I am a Software Engineer specializing in <b> Web Development</b>. My
          passion also extends to <b>Game Development</b>. Feel free to explore
          my projects to see my skills in action.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="mt-12">
        <h2 className="text-xl">Education</h2>
        <hr className="items-center mb-2 mt-1" />
        <EducationList />
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12">
        <h2 className="text-xl">Projects</h2>
        <hr className="items-center mb-2 mt-1" />
        <ProjectList />
      </section>

      {/* Skills */}
      <section id="projects" className="mt-12">
        <h2 className="text-xl">Skills</h2>
        <hr className="items-center mb-2 mt-1" />
        <SkillList />
      </section>

      {/* Footer */}
      <footer className="pt-[2rem] md:pt-[4rem] pb-8 text-start">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Yohanes Eka Putra.
        </p>
      </footer>
    </main>
  );
}
