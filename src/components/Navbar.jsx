import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__top-bar">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link navbar__link--home">
              home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/reservation"
              className="navbar__link navbar__link--reservation"
            >
              reservations
            </NavLink>
          </li>
        </ul>
        <ul className="navbar__bottom-bar">
          <li className="navbar__item">
            <NavLink
              to="/information"
              className="navbar__link navbar__link--info"
            >
              informations
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/contact"
              className="navbar__link navbar__link--contact"
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
