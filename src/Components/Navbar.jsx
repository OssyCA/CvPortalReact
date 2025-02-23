import { Link } from "react-router-dom";
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
        <a className="headerEasterEgg" href="/">
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
