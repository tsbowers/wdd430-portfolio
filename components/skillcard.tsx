interface SkillCardProps {
  category: string;
  skills: string[];
  description: string;
}

export default function SkillCard({ category, skills, description }: SkillCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}