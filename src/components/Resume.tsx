import DownloadIcon from "../assets/icons/download.svg?react";

export default function Resume() {
  return (
    <div className="component-wrapper flex items-center justify-between p-4!">
      <p className="text-sm md:text-base font-medium">For mere information:</p>
      <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
        <button className="cv-button cursor-pointer text-sm md:text-base font-semibold">
          Hent mit CV! <DownloadIcon className="w-4 h-4 text-current" />
        </button>
      </a>
    </div>
  );
}
