import About from "../components/About";
import Presentation from "../components/Presentation";
import Stack from "../components/Stack";

export default function home() {
  return (
    <main className="flex flex-col gap-8 page-wrapper max-h-screen">
      <div className="flex gap-8">
        <Presentation />
        <About />
      </div>

      <Stack />
    </main>
  );
}
