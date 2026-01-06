import About from "../components/About";
import Presentation from "../components/Presentation";
import Resume from "../components/Resume";
import Stack from "../components/Stack";

export default function home() {
  return (
    <main className="grid grid-cols-2 grid-rows-20 gap-8 page-wrapper max-h-screen">
      <div className="col-start-1 col-end-2 row-start-3 row-end-9">
        <Presentation />
      </div>
      <div className="col-start-2 col-end-3 row-start-3 row-end-9">
        <About />
      </div>
      <div className="col-start-1 col-end-2 row-start-12 row-end-15">
        <Resume />
      </div>
      <div className="col-start-1 col-end-3 row-start-15 row-end-19">
        <Stack />
      </div>
    </main>
  );
}
