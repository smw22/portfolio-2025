export default function Header() {
  return (
    <header className="page-wrapper">
      <nav className="bg-component-grey flex items-center justify-between py-6 px-12 gap-8 rounded-b-xl mb-8 w-full m-auto">
        <a className="font-bold" href="/">
          SMW
        </a>
        <ul className="flex items-center gap-8">
          <li>
            <a className="font-semibold" href="/">
              Hjemme
            </a>
          </li>
          <li>
            <a className="font-semibold" href="/projekter">
              Projekter
            </a>
          </li>
          <li>
            <a
              className="font-semibold bg-btn-blue hover:bg-btn-blue-hover text-white py-2 px-3 rounded-md transition-all duration-300"
              href="/contact"
            >
              Kontakt mig
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
