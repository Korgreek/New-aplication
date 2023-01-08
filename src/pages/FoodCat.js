import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Axios from "axios";
import { useState, useEffect } from "react";

export function FoodCat() {
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
              Cats are obligate carnivores, which means that they rely on
              nutrients found only in animal products. Cats evolved as hunters
              that consume prey that contains high amounts of protein, moderate
              amounts of fat, and a minimal amount of carbohydrates, and their
              diet still requires these general proportions today. Cats also
              require more than a dozen other nutrients, including vitamins,
              minerals, fatty acids, and amino acids. Although your cat needs
              certain amounts of each specific nutrient to be healthy,
              <strong> more is not always better</strong>. This is particularly
              true of vitamins and minerals, so the use of supplements is
              usually not necessary if you are feeding a balanced and complete
              diet. Supplements can be harmful to your cat, and they should
              never be given without a veterinarian’s approval. Cats should have
              access to clean, fresh water at all times.
              <br></br>
              <br></br>
              <strong>Types of Commercial Cat Food</strong>
              <br></br>
           
              Dry food contains between six and 10 percent water. Depending on
              the specific formulation, a mixture of ingredients are combined,
              extruded, and dried into bite-sized pieces.
              <span className="cat-underline">
                Dry cat food is relatively inexpensive,
              </span>{" "}
              and since it does not dry out, it offers owners the convenience of
              “free choice” feeding. However, dry food may be less palatable to
              a cat than moist or semi-moist food, and depending on the types
              and quality of the ingredients, may also be less digestible. If
              you do use dry food, it is important to store unused portions in a
              cool, dry location, and not to use the food after its expiration
              date. Owners often buy large amounts of dry food that can
              sometimes be stored for months, so checking the expiration date
              before feeding it to your cat is very important. Storing food for
              a long period of time decreases the activity and potency of many
              vitamins and increases the likelihood that fats will become
              rancide{" "}
              <strong>
                It’s a good idea to store dry cat food in an airtight container
                to help prevent nutrient deterioration and maintain flavor.
              </strong>{" "}
              <br></br>
              <br></br>
              <strong>A cat for every home</strong>
              <br></br>
             
              In choosing a cat food, it is also important to read the
              ingredients list. As with human foods, the items are listed in
              order of decreasing proportional weight. Look for foods in which
              meat, meat byproducts, or seafood are listed among the first few
              ingredients, as this indicates the food probably contains enough
              animal-source ingredients to supply essential amino acids and
              fatty acids.
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

export default FoodCat;
