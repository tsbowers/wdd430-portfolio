import SkillCard from "@/components/skillcard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        This about page shares more information about my background, technical stack, and passion for web development.
      </p>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard
          category="Frontend Development"
          description="Building responsive and accessible user interfaces with modern web standards."
          skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]}
        />
        <SkillCard
          category="Backend & Tools"
          description="Managing server logic, API endpoints, and development workflows."
          skills={["Node.js", "REST APIs", "Git & GitHub", "Vercel", "VS Code"]}
        />
      </div>
    </main>
  );
}