function Header() {
  return (
    <nav className="cyan lighten-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Khalilov
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://hadith-api-khalilov.netlify.app">Hadith API</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
