import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <main className="page-wrapper">
        <div className="component-wrapper">
          <h1 className="text-4xl font-bold mb-4">Projekt ikke fundet</h1>
          <Link to="/projekter" className="text-btn-blue underline">
            Tilbage til projekter
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-wrapper">
      <div className="component-wrapper mb-8">
        <Link
          to="/projekter"
          className="text-btn-blue underline mb-4 inline-block"
        >
          ← Tilbage til projekter
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

        <img
          src={project.detail_image_url}
          alt={`${project.name} project`}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
        />

        <div className="grid gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Koncept</h2>
            <p>{project.concept}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Beskrivelse</h2>
            <p>{project.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Detaljer</h2>
            <div className="grid gap-2">
              <p>
                <strong>Rolle:</strong> {project.role}
              </p>
              <p>
                <strong>Dato:</strong> {project.date}
              </p>
              <p>
                <strong>Teknologier:</strong> {project.technologies.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {project.github_link !== "Privately hosted" ? (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-btn-blue hover:bg-btn-blue-hover text-white py-2 px-4 rounded-md transition-all duration-300"
              >
                GitHub
              </a>
            ) : (
              <span className="bg-red-500 text-white py-2 px-4 rounded-md transition-all duration-300">
                Privately hosted
              </span>
            )}
            {project.demo_link !== "Inaktivt demo" ? (
              <a
                href={project.demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-btn-blue hover:bg-btn-blue-hover text-white py-2 px-4 rounded-md transition-all duration-300"
              >
                Demo
              </a>
            ) : (
              <span className="bg-gray-500 text-white py-2 px-4 rounded-md transition-all duration-300">
                Inaktivt demo
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
