import DownloadIcon from "../assets/icons/download.svg?react";

export default function Resume() {
  return (
    <div className="component-wrapper flex items-center justify-between p-4!">
      <p className="text-md font-medium">For mere information:</p>
      <button className="cv-button cursor-pointer">
        Hent mit CV! <DownloadIcon className="w-4 h-4 text-current" />
      </button>
    </div>
  );
}
