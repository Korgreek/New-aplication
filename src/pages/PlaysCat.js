import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function PlaysCat() {
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
            <div className="box-for-photo-cat4"></div>
            <h1>Plays</h1>
            <p className="cat-facts-paragraph">
              When it comes to having a darn good time, cats really know how to
              pawty. There are many reasons why cats display play behaviours,
              including instincts, a need for exercise and to establish bonds,
              but how do cats play? Cat play behaviours can essentially be
              categorised into one of three forms.
              <br></br>
              <br></br>
              <strong>Social cat play</strong>
          
              <br></br>
              Social cat play creates bonds between your cat and other animals
              such as other cats, dogs and the most dangerous and weird looking
              animal of them all, the human being. Homes with multiple cats will
              notice their fur-siblings interacting and bonding through play
              fighting and side-by-side object and active play. Not sure if your
              cat siblings are playing nice? Have a peek at our guide to telling
              the difference between cat play and cat fighting here.
              <br></br>
              <br></br>
              <strong>Object cat play</strong>
              <br></br>
              
              In choosing a cat food, it is also important to read the
              ingredients list. As with human foods, the items are listed in
              order of decreasing proportional weight. Look for foods in which
              meat, meat byproducts, or seafood are listed among the first few
              ingredients, as this indicates the food probably contains enough
              animal-source ingredients to supply essential amino acids and
              fatty acids.
              <br></br>
              <br></br>
              <strong>Active cat play</strong>
             
              <br></br>
              Active cat play is when your cat or cats simply <strong>MUST</strong> run from room
              to room, scooting over any obstacles and ramming down any small
              humans or fur-siblings in their path. This sprint for the sunroom
              helps your kitty work up an appetite, honing their coordination,
              agility and flexibility skills.
            </p>
            <Link className="" to="/cat-facts">
              <button className="btn btn-outline-primary">Home</button>
            </Link>
            <Link className="" to="/cat-facts/food">
              <button className="btn btn-outline-primary">Previous</button>
            </Link>
            <Link className="" to="/cat-facts/stereotypes">
              <button className="btn btn-outline-primary">Next</button>
            </Link>
            <Link className="" to="/cat-facts/stereotypes">
              <button className="btn btn-outline-primary">Last</button>
            </Link>
          </motion.div>
          <div className="funFact">
            <p className="api-info-cat">Fun fact about cats: {catFunFact}</p>
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

export default PlaysCat;
