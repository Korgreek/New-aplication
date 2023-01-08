import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css' 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export function MainBox (){
  return(
    <div className="parent">
    <div className="cat-box">
        <div className="box-shadow text-center ">
        <Link className="" to="/cat-facts"><button className="btn btn-outline-primary">Home</button></Link>
        </div>
         </div>
    <div className="dog-box">
    <div className="box-shadow text-center">
    <button className="btn btn-outline-light ">Check info about dog </button></div> </div>
    <div className="random-info-box"> </div>
    </div>
  )
}

export default MainBox