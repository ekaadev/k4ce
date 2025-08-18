import Image from "next/image";

const EducationList = () => {
  const educations = [
    {
      title: "Universitas Katolik Darma Cendika",
      image:
        "https://media.licdn.com/dms/image/v2/C510BAQEp8bmrn3kRRg/company-logo_100_100/company-logo_100_100/0/1630568101050/unika_darma_cendika_logo?e=1758153600&v=beta&t=7NW6bTDLSHnHowCXvwyxad7pGEn3uA5WOQwj4u42f5I", // Replace with actual image path
      year: "2023 - Now",
      role: "Computer Science Student",
    },
    {
      title: "Alkademi",
      image:
        "https://media.licdn.com/dms/image/v2/C4D0BAQGCI6KdhrWPDw/company-logo_200_200/company-logo_200_200/0/1654087688262?e=1758153600&v=beta&t=EZLBmFGt1dvMGpcqo7xI0XIE2OKGsLQv4MjF_Q_YDjM", // Replace with actual image path
      year: "Aug 2023 - Oct 2023",
      role: "Sekolah Beta Intensif - Nuxt.js",
    },
  ];

  return (
    <div className="space-y-4">
      {educations.map((education, index) => (
        <div className="flex flex-row gap-4 items-center" key={index}>
          {/* img-education */}
          <div className="relative w-12 h-12 shrink-0">
            <Image
              src={education.image}
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
              <p className="font-bold text-sm md:text-base max-w-[200px] md:max-w-full">
                {education.title}
              </p>
              <span className="font-normal font-mono text-xs md:text-sm text-gray-500">
                {education.year}
              </span>
            </div>
            <p className="font-normal text-xs md:text-sm text-gray-500">
              {education.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationList;
