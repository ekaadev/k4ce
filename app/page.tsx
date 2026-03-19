type PersonalInfoType = "phone" | "email" | "linkedin" | "github";

type PersonalInfoItem = {
  type: PersonalInfoType;
  value: string;
  link?: string;
};

type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  duration: string;
};

type ExperienceItem = {
  company: string;
  location: string;
  position: string;
  duration: string;
  list?: string[];
};

type ProjectItem = {
  name: string;
  technologies: string;
  duration: string;
  list?: string[];
};

type TechnicalSkillItem = {
  type: "language" | "framework" | "developerTools" | "libraries";
  name: string;
  value: string;
};

const personalInfo: PersonalInfoItem[] = [
  {
    type: "phone",
    value: "+62-853-3761-8839",
  },
  {
    type: "email",
    value: "ekaadev9@gmail.com",
    link: "mailto:ekaadev9@gmail.com",
  },
  {
    type: "github",
    value: "github.com/ekaadev",
    link: "https://github.com/ekaadev",
  },
  {
    type: "linkedin",
    value: "linkedin.com/in/yohaneseka",
    link: "https://www.linkedin.com/in/yohanes-eka-putra-85952128a/",
  },
];

const education: EducationItem[] = [
  {
    institution: "Universitas Katolik Darma Cendika",
    location: "Surabaya, Indonesia",
    degree: "Bachelor of Computer Science",
    duration: "Sep. 2023 - Present",
  },
  {
    institution: "Alkademi: Bootcamp",
    location: "Online",
    degree: "Program: Sekolah Beta Intensif - Nuxt JS",
    duration: "Aug. 2023 - Oct. 2023",
  },
];

const experience: ExperienceItem[] = [
  {
    company: "Ukirama",
    location: "Central Jakarta, Indonesia",
    position: "Software Engineer Internship",
    duration: "Feb. 2026 - Present",
    list: [
      "Developed and maintained automated test cases using Minitest in Ruby on Rails to ensure application reliability",
      "Performed manual testing including functional, regression, and exploratory testing to identify bugs and ensure quality",
      "Collaborated with developers to reproduce issues, validate fixes, and improve overall software quality",
    ],
  },
  {
    company: "Universitas Katolik Darma Cendika",
    location: "Surabaya, Indonesia",
    position: "Bootcamp Instructor",
    duration: "Sep. 2025 - Jan. 2026",
    list: [
      "Taught bootcamp sessions on database fundamentals, programming introduction, and basic algorithms to university students",
      "Delivered hands-on training using MySQL and Python to help students understand core programming and data concepts",
      "Designed learning materials, exercises, and assignments to reinforce students' understanding of programming logic and database management",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    name: "Hegai: Generative AI",
    technologies: "Svelte Kit, Python, Supabase, Pinecone DB",
    duration: "Jun. 2025 - Sep. 2025",
    list: [
      "Developed a sermon-summarization platform using RAG (Retrieval-Augmented Generation) and Generative AI",
      "Built end-to-end features including data ingestion, embedding generation and AI-driven summarization workflows",
    ],
  },
  {
    name: "Clean Shoe: Web Application",
    technologies: "Svelte Kit, Supabase, Xendit",
    duration: "Mar. 2025 - Aug. 2025",
    list: [
      "Developed a full web application for a shoe-cleaning service business",
      "Integrated Xendit payment gateway for seamless online transactions",
      "Built both frontend and backend workflows to support end-to-end business operations",
    ],
  },
  {
    name: "Kaen: Roguelike Game",
    technologies: "Godot, Godot Script",
    duration: "Sep. 2024 - Jan. 2025",
    list: [
      "Designed and developed a 2D pixel-style roguelike game from concept to prototype",
      "Created game design elements such as level concepts, gameplay loops, and progression systems",
      "Implemented all gameplay logic using Godot Engine and GDScript",
    ],
  },
  {
    name: "Giros: Mobile Application",
    technologies: "Android Studio, Kotlin, XML, Gemini API",
    duration: "Sep. 2024 - Feb. 2025",
    list: [
      "Developed a mobile application that integrates with Gemini AI to generate playful “roasting” content based on GitHub profiles",
    ],
  },
  {
    name: "My Schedule: UI/UX Design",
    technologies: "Figma, Maze",
    duration: "Mar. 2024 - Aug. 2024",
    list: [
      "Designed a desktop task management application with a UI/UX approach to improve productivity and streamline daily workflows",
    ],
  },
];

const technicalSkills: TechnicalSkillItem[] = [
  {
    type: "language",
    name: "Languages",
    value:
      "Golang, SQL (Postgres, MySQL), TypeScript, JavaScript, HTML/CSS, Python, Ruby",
  },
  {
    type: "framework",
    name: "Frameworks",
    value:
      "Fiber, Next JS, Nuxt JS, Svelte Kit, Express JS, Node.js, FastAPI, Rails",
  },
  {
    type: "developerTools",
    name: "Developer Tools",
    value:
      "Git, Docker, Github Action, Google Cloud Platform, VS Code, PyCharm, IntelliJ",
  },
  {
    type: "libraries",
    name: "Libraries",
    value: "React",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-olive-100 font-sans">
      {/* Main Content */}
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-start py-16 px-16 sm:items-start">
        {/* Header */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full mb-2">
          <h1 className="w-full font-serif text-center font-bold text-[2.35rem] leading-10 tracking-wide text-olive-900">
            Yohanes Eka Putra
          </h1>
          <p className="flex flex-row gap-1 justify-center w-full font-serif leading-10 tracking-normal text-olive-900 -mt-3">
            {/* Personal Info */}
            {personalInfo.map((item, index) => (
              <span
                key={item.type}
                className="flex flex-row gap-1 items-center"
              >
                {item.link ? (
                  <a
                    className="underline underline-offset-4 hover:text-blue-800"
                    href={item.link}
                    target="_blank"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="underline underline-offset-4">
                    {item.value}
                  </span>
                )}
                {index < personalInfo.length - 1 && <span>|</span>}
              </span>
            ))}
          </p>
        </div>
        {/* Education Section */}
        <div className="w-full flex flex-col gap-4 text-base font-medium items-start mb-4 text-olive-900">
          <h2 className="font-serif uppercase text-base tracking-wide">
            <span className="text-xl">E</span>ducation
          </h2>
          <hr className="w-full border border-t border-olive-900 opacity-50 -mt-4" />
          {education.map((item) => (
            <div
              key={item.institution}
              className="grid grid-cols-2 w-full pr-2 pl-4 -mt-3.5 items-center"
            >
              <div className="font-bold font-serif text-lg">
                {item.institution}
              </div>
              <div className="font-serif text-right">{item.location}</div>
              <div className="font-serif italic">{item.degree}</div>
              <div className="font-serif text-right italic">
                {item.duration}
              </div>
            </div>
          ))}
        </div>
        {/* Experience Section */}
        <div className="w-full flex flex-col gap-4 text-base font-medium items-start mb-4 text-olive-900">
          <h2 className="font-serif uppercase text-base tracking-wide">
            <span className="text-xl">E</span>xperience
          </h2>
          <hr className="w-full border border-t border-olive-900 opacity-50 -mt-4" />
          {experience.map((item, idx) => (
            <div key={idx} className="w-full">
              <div className="grid grid-cols-2 w-full pr-2 pl-4 -mt-3.5 items-center">
                <div className="font-bold font-serif text-lg">
                  {item.position}
                </div>
                <div className="font-serif text-right">{item.duration}</div>
                <div className="font-serif italic">{item.company}</div>
                <div className="font-serif text-right italic">
                  {item.location}
                </div>
              </div>
              <ul>
                {item.list?.map((point, pointIdx) => (
                  <li
                    key={pointIdx}
                    className="font-serif list-disc list-inside ml-10 mr-1"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Projects Section */}
        <div className="w-full flex flex-col gap-4 text-base font-medium items-start mb-4 text-olive-900">
          <h2 className="font-serif uppercase text-base tracking-wide">
            <span className="text-xl">P</span>rojects
          </h2>
          <hr className="w-full border border-t border-olive-900 opacity-50 -mt-4" />
          {projects.map((item, idx) => (
            <div key={idx} className="w-full">
              <div className="grid grid-cols-[1fr_auto] w-full pr-2 pl-4 -mt-3.5 items-center">
                <div className="font-bold font-serif text-base">
                  {item.name} |{" "}
                  <span className="italic font-normal">
                    {item.technologies}
                  </span>
                </div>
                <div className="font-serif text-right">{item.duration}</div>
              </div>
              <ul>
                {item.list?.map((point, pointIdx) => (
                  <li
                    key={pointIdx}
                    className="font-serif list-disc list-inside ml-10 mr-1"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Technical Skills */}
        <div className="w-full flex flex-col gap-4 text-base font-medium items-start mb-4 text-olive-900">
          <h2 className="font-serif uppercase text-base tracking-wide">
            <span className="text-xl">T</span>echnical Skills
          </h2>
          <hr className="w-full border border-t border-olive-900 opacity-50 -mt-4" />
          {technicalSkills.map((item, idx) => (
            <div key={item.type} className="w-full">
              {idx === 0 ? (
                <div className="flex flex-col w-full pr-2 pl-4 -mt-3.5 items-start">
                  <div className="font-serif">
                    <span className="font-bold">{item.name}</span>: {item.value}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col w-full pr-2 pl-4 -mt-5 items-start">
                  <div className="font-serif">
                    <span className="font-bold">{item.name}</span>: {item.value}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
