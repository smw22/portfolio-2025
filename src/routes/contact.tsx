import RobotContactIcon from "../assets/icons/robot-contact.svg?react";

export default function contact() {
  return (
    <main className="flex flex-col gap-8 page-wrapper w-fit">
      <div className="component-wrapper flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">Kontakt mig</h1>
        <div className="flex flex-wrap">
          <div>
            <ul className="flex flex-col gap-4">
              <li className="mt-6 text-lg">
                <span className="font-bold mr-1">Email: </span>
                sergiomoronwestergaard@gmail.com
              </li>
              <li className="mt-2 text-lg">
                <span className="font-bold mr-1">Telefon: </span> +45 50 35 58
                56
              </li>
              <li className="mt-2 text-lg">
                <span className="font-bold mr-1">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/sergio-mw/?locale=da-DK"
                  className="underline text-blue-500"
                  target="_blank"
                >
                  https://www.linkedin.com/in/sergio-mw/
                </a>
              </li>
              <li className="mt-2 text-lg">
                <span className="font-bold mr-1">GitHub: </span>
                <a
                  href="https://github.com/smw22"
                  className="underline text-blue-500"
                  target="_blank"
                >
                  https://github.com/smw22
                </a>
              </li>
            </ul>
          </div>

          <div>
            <RobotContactIcon className="w-60 h-60 m-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}
