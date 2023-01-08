import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {motion} from "framer-motion";

const NavbarMenu = (props) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cat&Dog - D.Baliński</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav"
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}>
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/cat-facts">Cat Facts</Link>
        <Link className="nav-link" to="/dog-facts">Dog Facts</Link>
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavbarMenu;