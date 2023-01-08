import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Axios from "axios";
import { useState, useEffect } from "react";

export function CatStereotypes() {
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
            <div className="box-for-photo-cat5"></div>
            <p className="cat-facts-paragraph">
              It’s raining cats and dogs.” “They fight like cats and dogs.” “Oh!
              He’s a dog person, and she’s well… kind of a cat lady.” For as
              long as we can remember, cats and dogs have been lumped into the
              same group. You like one, but you’re not supposed to like the
              other. It’s an odd rivalry that’s spawned comics, books, and even
              a movie. Based on dog and <strong>cat stereotypes</strong>, these
              misconceptions have caused cats to gain a bad rep over the past
              few years. Think Tom from Tom and Jerry. However, the reality is
              that cats are more honey than vinegar. They’re sweet, they’re
              playful, and all they want is affection from their favorite human.
              It’s time to show more respect for our beautiful feline friends
              and realize that a cat is a cat and will always do ‘cat things’
              not ‘dog things’. While we expect them to do dog things like fetch
              the ball, go for a walk… we never expect our dog to purr or use
              the litter box.
              <br></br>
              <br></br>
              <strong>A Lifetime of Adventures</strong>
              <br></br>
             
              To a cat, our homes are their newest playground full of exciting
              adventures. Countertops turn into mountains, cabinets turn into
              caverns, exploring behind the fridge turns into spelunking. Cats
              find the mystery in every corner. They brave the open bathtub
              waters to pounce on the mysterious bubbles. They crawl their way
              through the <span className="cat-underline">blankets and pillows that make up the abandoned ruins
              of our beds.</span> And, most importantly, they take the time and
              patience to make sure that we’re okay. They bring us appetizing
              offerings of mice, leaves, and bumblebees to help us feed
              ourselves. They lick our hands to make sure we’re clean, and they
              snuggle up to us to keep us safe. It’s our furry companion that
              chooses to stay beside us that wins the title of hooman’s best
              friend! Each and every day, we have the <strong>opportunity to fight
              against cat stereotypes</strong> and share our homes with our pet
              companions. The chance to wake up next to and experience the love
              of another animal is something we should appreciate every single
              day. Cats show their love through nose boops, purrs, and gentle
              love nips, and at the end of the day, it’s the least we can do to
              show our love in return.
              <br></br>
              <br></br>
              <strong>A cat for every home</strong>
              <br></br>
              
              People often divide themselves into cat lovers and dog lovers. The
              reality is that there is an animal out there for everyone. There’s
              a cat, a dog, a horse, or even a fish that matches your spirit and
              soul, and placing personality traits onto an animal because of
              their species can often limit your love. There is no divide or
              difference between cat and dog lovers; there is simply an
              appreciation for the animal who has chosen to share their life
              with you.
            </p>
            <Link className="" to="/cat-facts">
              <button className="btn btn-outline-primary">Home</button>
            </Link>
            <Link className="" to="/cat-facts/plays">
              <button className="btn btn-outline-primary">Previous</button>
            </Link>
            <Link className="" to="/cat-facts/about-cat">
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

export default CatStereotypes;
