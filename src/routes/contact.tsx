import RobotContactIcon from "../assets/icons/robot-contact.svg?react";

export default function contact() {
  return (
    <main className="flex flex-col gap-4 sm:gap-6 md:gap-8 page-wrapper w-full max-w-4xl mx-auto px-4">
      <div className="component-wrapper flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Kontakt mig
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="w-full md:w-auto">
            <ul className="flex flex-col gap-3 sm:gap-4">
              <li className="mt-2 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg wrap-break-word">
                <span className="font-bold mr-1">Email: </span>
                <span className="break-all">
                  sergiomoronwestergaard@gmail.com
                </span>
              </li>
              <li className="mt-2 text-sm sm:text-base md:text-lg">
                <span className="font-bold mr-1">Telefon: </span> +45 50 35 58
                56
              </li>
              <li className="mt-2 text-sm sm:text-base md:text-lg">
                <span className="font-bold mr-1">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/sergio-mw/?locale=da-DK"
                  className="underline text-blue-500 break-all hover:text-blue-600"
                  target="_blank"
                >
                  https://www.linkedin.com/in/sergio-mw/
                </a>
              </li>
              <li className="mt-2 text-sm sm:text-base md:text-lg">
                <span className="font-bold mr-1">GitHub: </span>
                <a
                  href="https://github.com/smw22"
                  className="underline text-blue-500 break-all hover:text-blue-600"
                  target="_blank"
                >
                  https://github.com/smw22
                </a>
              </li>
            </ul>
          </div>

          <div className="shrink-0">
            <RobotContactIcon className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 m-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}
