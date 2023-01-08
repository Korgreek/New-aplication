import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Axios from "axios";
import { useState, useEffect } from "react";

export function CatOccurs() {
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
            <div className="box-for-photo-cat2"></div>
            <p className="cat-facts-paragraph">
              The animals we call cats, both domestic and wild, belong to the
              family Felidae. They can be found roaming wild across{" "}
              <strong>Europe, Africa, Asia and North and South America</strong>.
              They have adapted to a range of habitats, from tropical
              rainforests to the extremes of deserts and mountain ranges.
              <br></br>
              <br></br>
              <strong>What was the first cat on earth?</strong>
              <br></br>
              
              There were other earlier cat-like species but Proailurus (meaning
              "before the cat"; also called<strong> Leman's Dawn Cat</strong>),
              which appeared about 30 million years ago, is generally considered
              the first "true cat".
              <br></br>
              <br></br>
              <strong>When did cats come to earth?</strong>
              <br></br>
          
              The earlier ancestors of today's domestic cats spread from
              southwest Asia and into Europe <strong>as early as 4400 B.C.</strong> The cats
              likely started hanging around farming communities in the Fertile
              Crescent about 8,000 years ago, where they settled into a mutually
              beneficial relationship as humans' rodent patrol.
            </p>
            <Link className="" to="/cat-facts">
              <button className="btn btn-outline-primary">Home</button>
            </Link>
            <Link className="" to="/cat-facts/about-cat">
              <button className="btn btn-outline-primary">Previous</button>
            </Link>
            <Link className="" to="/cat-facts/food">
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

export default CatOccurs;
