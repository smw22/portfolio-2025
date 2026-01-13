import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-wrapper">
      <nav className="bg-component-grey flex items-center justify-between py-6 px-12 gap-8 rounded-b-xl mb-8 w-full m-auto">
        <Link className="font-bold text-2xl" to="/">
          SMW
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link className="font-semibold" to="/">
              Hjemme
            </Link>
          </li>
          <li>
            <Link className="font-semibold" to="/projekter">
              Projekter
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold bg-btn-blue hover:bg-btn-blue-hover hover:underline text-white py-2 px-3 rounded-md transition-all duration-300"
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
