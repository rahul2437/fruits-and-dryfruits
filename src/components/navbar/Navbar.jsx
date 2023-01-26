import { useContext, useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { ThemeContext } from "../../context/theme";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  const [showNavList, setShowNavList] = useState(false);
  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <Link to="/" onClick={toggleNavList} className="link link--nav">
            Home
          </Link>
        </li>
        <li className="nav__list-item">
          <Link
            to="/aboutus"
            onClick={toggleNavList}
            className="link link--nav"
          >
            About us
          </Link>
        </li>
        <li className="nav__list-item">
          <Link
            to="/gallery"
            onClick={toggleNavList}
            className="link link--nav"
          >
            Gallery
          </Link>
        </li>
        <li className="nav__list-item">
          <Link
            to="/products"
            onClick={toggleNavList}
            className="link link--nav"
          >
            Products
          </Link>
        </li>
        <li className="nav__list-item">
          <Link
            to="/contactus"
            onClick={toggleNavList}
            className="link link--nav"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyIcon /> : <Brightness2Icon />}
      </button>
      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
