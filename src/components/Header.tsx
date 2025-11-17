export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-center bg-component-grey py-4 px-12 gap-8 w-fit m-auto rounded-b-lg">
          <li className="mr-32">
            <a className="font-bold" href="/">
              SMW
            </a>
          </li>
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
            <button className="font-semibold bg-btn-blue text-white p-2 rounded-md">
              Kontakt mig
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
