import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const easterEggHandler = (e) => {
    e.preventDefault(); // Prevents the default action of the event from happening
    document.body.classList.toggle("easter-egg");
  };

  return (
    <header>
      <h1>
        <a className="headerEasterEgg" href="/CvPortalReact/">
          {" "}
          {/* goes back to home */}
          Ossy{" "}
        </a>
        <a href="#" className="headerEasterEgg" onClick={easterEggHandler}>
          {/** Easter egg */}
          Website
        </a>
      </h1>
      <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
        &#9776;
      </div>
      <nav className={isNavOpen ? "open" : ""}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/cv">CV</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
