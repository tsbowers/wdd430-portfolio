import ProjectList from "@/components/projectlist";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A full-stack Next.js app for managing products, inventory, and order analytics.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/your-username/project1",
  },
  {
    title: "Weather Application",
    description: "A real-time React app that fetches and displays live weather forecasts.",
    technologies: ["React", "JavaScript", "CSS", "OpenWeather API"],
    link: "https://github.com/your-username/project2",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}