import { techStack } from "../data/techStack";

export default function Stack() {
  return (
    <section className="component-wrapper mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">TECH STACK</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap bg-white rounded-full p-6 border-2 border-black">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <Icon className="w-8 h-8" />
              <span className="text-sm">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
