import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-wrapper">
      <nav className="bg-component-grey flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 px-4 sm:px-8 md:px-12 gap-4 sm:gap-8 rounded-b-xl mb-8 w-full m-auto">
        <Link className="font-bold text-xl sm:text-2xl" to="/">
          SMW
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <li>
            <Link className="font-semibold text-sm sm:text-base" to="/">
              Hjemme
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-sm sm:text-base"
              to="/projekter"
            >
              Projekter
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold bg-btn-blue hover:bg-btn-blue-hover hover:underline text-white py-2 px-3 rounded-md transition-all duration-300 text-sm sm:text-base"
              to="/kontakt"
            >
              Kontakt mig
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
