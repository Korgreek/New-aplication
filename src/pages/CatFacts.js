import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CatFacts() {
  const [catFunFact, setCatFunFact] = useState("");
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFunFact(res.data.fact);
    });
  }, []);
  return (
    <>
      <>
        <div className="cat-facts-container">
          <div className="small-cat-box1">
            <Link className="nav-link" to="/cat-facts/about-cat">
              <button className="btn btn-outline-primary">About cat</button>
            </Link>
            <Link className="nav-link" to="/cat-facts/occurs">
              <button className="btn btn-outline-primary">Occurs</button>
            </Link>
            <Link className="nav-link" to="/cat-facts/food">
              <button className="btn btn-outline-primary">Food</button>
            </Link>
            <Link className="nav-link" to="/cat-facts/plays">
              <button className="btn btn-outline-primary">Plays</button>
            </Link>
            <Link className="nav-link" to="/cat-facts/stereotypes">
              <button className="btn btn-outline-primary">Stereotypes</button>
            </Link>
          </div>

          <motion.div
            className="big-cat-box"
            intial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {" "}
            <div className="box-for-photo-cat3"></div>
            <p className="cat-facts-paragraph">
              You have come to the section dedicated to cats. Here you can find
              general information<strong> about cats, their origins, food, games </strong> or
              <strong>stereotypes.</strong>
              <br></br>
              
              <p>For general information, please visit <strong>About cat</strong></p>
              <br></br>
              
              <p>For occurence information, please visit <strong>Occurence</strong></p>
              <br></br>
              
              <p>For food information, please visit <strong>Food</strong></p>
              <br></br>
              
              <p>For plays information, please visit <strong>Plays</strong></p>
              <br></br>
            
              <p>For stereotypes information, please visit <strong>Stereotypes</strong></p>
              <br></br>
              <p><strong>When using a mobile device, the change is made using the navigation buttons below.</strong></p>
              <br></br>
            </p>
            <Link className="" to="/cat-facts">
              <button className="btn btn-outline-primary">Home</button>
            </Link>
            <Link className="" to="/cat-facts/occurs">
              <button className="btn btn-outline-primary">Previous</button>
            </Link>
            <Link className="" to="/cat-facts/plays">
              <button className="btn btn-outline-primary">Next</button>
            </Link>
            <Link className="" to="/cat-facts/stereotypes">
              <button className="btn btn-outline-primary">Last</button>
            </Link>
          </motion.div>
          <div className="funFact">
            <p className="api-info-cat">Fun fact about cat: {catFunFact}</p>
            <Link className="nav-link" to="/">
              <button className="btn btn-outline-primary">
                Back to Main page
              </button>
            </Link>
          </div>
        </div>
      </>
    </>
  );
}

export default CatFacts;
