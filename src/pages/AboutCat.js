import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Axios from "axios";
import { useState, useEffect } from "react";

export function AboutCat() {
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
            <div className="box-for-photo-cat1"></div>
            <p className="cat-facts-paragraph">
              The cat (Felis catus) is a domestic species of small carnivorous
              mammal. It is the only domesticated species in the family Felidae
              and is commonly referred to as the domestic cat or house cat to
              distinguish it from the wild members of the family. Cats are
              commonly kept as house pets but can also be farm cats or feral
              cats; the feral cat ranges freely and avoids human contact.
              Domestic cats are valued by humans for companionship and their
              ability to kill rodents. About 60 cat breeds are recognized by
              various cat registries.
              <br></br>
              <br></br>
              <strong></strong>
              <br></br>
              The cat is similar in anatomy to the other felid species: it has a
              strong flexible body, quick reflexes, sharp teeth, and retractable
              claws adapted to killing small prey. Its night vision and sense of
              smell are well developed. Cat communication includes vocalizations
              like meowing, purring, trilling, hissing, growling, and grunting
              as well as cat-specific body language. Although the cat is a
              social species, it is a solitary hunter. As a predator, it is
              crepuscular, i.e. most active at dawn and dusk. It can hear sounds
              too faint or too high in frequency for human ears, such as those
              made by mice and other small mammals. It also secretes and
              perceives pheromones.
              <br></br>
              <br></br>
              <strong></strong>
              <br></br>
              Female domestic cats can have kittens from spring to late autumn,
              with litter sizes often ranging from two to five kittens. Domestic
              cats are bred and shown at events as registered pedigreed cats, a
              hobby known as cat fancy. Population control of cats may be
              effected by spaying and neutering, but their proliferation and the
              abandonment of pets has resulted in large numbers of feral cats
              worldwide, contributing to the extinction of entire bird, mammal,
              and reptile species.
              <br></br>
              <br></br>
              <strong></strong>
              <br></br>
              As of 2021, there were an estimated 220 million owned and 480
              million stray cats in the world. As of 2017, the domestic
              cat was the second most popular pet in the United States, with
              95.6 million cats owned and around 42 million
              households owning at least one cat. In the United Kingdom, 26%
              of adults have a cat, with an estimated population of 10.9 million
              pet cats as of 2020.[20]
            </p>
            <Link className="" to="/cat-facts">
              <button className="btn btn-outline-primary">Home</button>
            </Link>
            <Link className="" to="/cat-facts/stereotypes">
              <button className="btn btn-outline-primary">Previous</button>
            </Link>
            <Link className="" to="/cat-facts/occurs">
              <button className="btn btn-outline-primary">Next</button>
            </Link>
            <Link className="" to="/cat-facts/stereotypes">
              <button className="btn btn-outline-primary">Last</button>
            </Link>
          </motion.div>
          <div className="funFact">
            <p className="api-info-cat">Fun fact about cat: </p><p>{catFunFact}</p>
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

export default AboutCat;
