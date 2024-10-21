const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__top-bar">
          <li className="navbar__item">
            <a className="navbar__link navbar__link--home" href="">
              home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link navbar__link--reservation" href="">
              reservations
            </a>
          </li>
        </ul>
        <ul className="navbar__bottom-bar">
          <li className="navbar__item">
            <a className="navbar__link navbar__link--info" href="">
              informations
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link navbar__link--contact" href="">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
