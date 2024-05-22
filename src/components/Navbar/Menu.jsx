import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="full-screen-overlay-nav">
        <button className="toggle-button">
          <label className="btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox"  onClick={toggleNav}/>

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </button>
        <motion.nav
          className={`nav-overlay ${isOpen ? "open" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }} // Add transition duration
        >
          <ul>
            <li>
            <Link to={"/"}>Root</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link to={"/service-list"}>Service</Link>
            </li>
            <li>
              <Link to={"/blog-list"}>Blog</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </motion.nav>
      </div>
    </>
  );
};

export default Menu;
