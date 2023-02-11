import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        src="https://cdn-icons-png.flaticon.com/512/706/706934.png"
        alt="pizza"
      />
      <Link to="/">Home</Link>
      <Link to="/PizzaSuggestion">Pizza Suggestion</Link>
      <Link to="/Register">Register</Link>
      <Link to="/About">About</Link>

      <Outlet />
    </div>
  );
};

export default NavBar;
