/* eslint-disable react/prop-types */

import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
// import Navbar from "../components/Navbar"
import Menu from "../components/Navbar/Menu";

const Layout = (props) => {
  return (
    <Fragment>
      <Menu/>
      
      {props.children}

      <footer>
        hello am footer
      </footer>
    </Fragment>
  );
};

export default Layout;
