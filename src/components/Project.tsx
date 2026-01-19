import { Link } from "react-router-dom";

export default function Project({
  projectData,
}: {
  projectData: (typeof import("../data/projects").projects)[0];
}) {
  return (
    <Link
      to={`/projekter/${projectData.id}`}
      className="bg-blue-500 p-8 rounded-2xl"
    >
      <div>
        <h1 className="text-xl">{projectData.name}</h1>
        <img
          src={projectData.image_url}
          alt={`${projectData.name} project image`}
          width={500}
        />
      </div>
      <div className="flex justify-between pt-4">
        <div>
          <p>Brugt teknologier:</p>
          <ul className="flex gap-4">
            {projectData.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="text-right">
          <p>Date:</p>
          <p>{projectData.date}</p>
        </div>
      </div>
    </Link>
  );
}
