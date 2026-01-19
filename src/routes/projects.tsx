import Project from "../components/Project";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="page-wrapper">
      <div className="component-wrapper mb-8">
        <h1 className="text-4xl font-bold">Projekter</h1>
        <div className="flex flex-wrap gap-8">
          {projects.map((project) => (
            <Project key={project.id} projectData={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
