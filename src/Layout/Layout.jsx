/* eslint-disable react/prop-types */

import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
// import Navbar from "../components/Navbar"
import Menu from "../components/Navbar/Menu";

const Layout = (props) => {
  return (
    <Fragment>
      <Menu/>
      {/* <Menu style={{ zIndex: 4000 , position: "absolute" }}/> */}
      
      {props.children}

      <footer></footer>
    </Fragment>
  );
};

export default Layout;
