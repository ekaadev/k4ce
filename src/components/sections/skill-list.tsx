import { Badge } from "@/components/ui/badge";

const SkillList = () => {
  const skills = [
    "Go",
    "Typescript",
    "Svelte",
    "Nest JS",
    "Godot",
    "PostgreSQL",
    "Next.js",
    "Tailwind CSS",
    "Express.js",
    "Prisma",
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} className="text-xs md:text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
