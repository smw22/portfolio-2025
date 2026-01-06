import DownloadIcon from "../assets/icons/download.svg?react";

export default function Resume() {
  return (
    <section className="component-wrapper flex items-center justify-between">
      <p className="text-md">For mere information:</p>
      <button className="bg-white border-2 border-black rounded-full flex gap-4 items-center px-4 py-2">
        Hent mit CV! <DownloadIcon className="w-4 h-4" />
      </button>
    </section>
  );
}
