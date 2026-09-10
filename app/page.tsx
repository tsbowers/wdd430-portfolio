import ProjectList from "@/components/projectlist";

const projects = [
  {
    title: "Date Night Planner",
    description: "A WDD 330 final project that helps users plan a date night by browsing local events or trending movies and shows to stream.",
    technologies: ["JavaScript", "Vite", "ESLint", "Prettier"],
    link: "https://github.com/tsbowers/date_night",
  },
  {
    title: "NWA Hiking Guide",
    description: "A WDD 231 final project showcasing hiking trails, current weather conditions, and featured hikes across Northwest Arkansas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/tsbowers/wdd231/tree/main/hiking",
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