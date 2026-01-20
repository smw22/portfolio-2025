import About from "../components/About";
import Presentation from "../components/Presentation";
import TechStack from "../components/TechStack";

export default function home() {
  return (
    <main className="flex flex-col gap-8 page-wrapper">
      <div className="flex flex-col gap-8 xl:flex-row">
        <Presentation />
        <About />
      </div>

      <TechStack />
    </main>
  );
}
