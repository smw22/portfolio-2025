import About from "../components/About";
import Presentation from "../components/Presentation";

export default function home() {
  return (
    <main className="grid grid-cols-2 gap-8 page-wrapper">
      <Presentation />
      <About />
    </main>
  );
}
