import { Link } from "react-router-dom";

export default function Project({
  projectData,
}: {
  projectData: (typeof import("../data/projects").projects)[0];
}) {
  return (
    <Link
      to={`/projekter/${projectData.id}`}
      className="bg-btn-blue text-white p-8 rounded-2xl w-full lg:w-[calc(50%-1rem)]"
    >
      <div>
        <h1 className="text-xl mb-2">{projectData.name}</h1>
        <img
          src={projectData.image_url}
          alt={`${projectData.name} project image`}
          className="w-full lg:h-90 object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between pt-4">
        <div>
          <p className="underline">Brugt teknologier:</p>
          <ul className="flex flex-col gap-1 lg:flex-row lg:gap-4">
            {projectData.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="text-right">
          <p className="underline">Date:</p>
          <p>{projectData.date}</p>
        </div>
      </div>
    </Link>
  );
}
