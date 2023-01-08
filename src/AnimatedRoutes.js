import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { HomeSite, ButtonLinkCatFacts } from "./pages/Home";
import { CatFacts } from "./pages/CatFacts";
import { DogFacts } from "./pages/DogFacts";
import { ErrFourZeroFour } from "./pages/Error404";
// KittySide
import {AboutCat} from "./pages/AboutCat"
import {FoodCat} from "./pages/FoodCat"
import {CatOccurs} from "./pages/OccursCat"
import {CatStereotypes} from "./pages/CatStereotypes"
import {PlaysCat} from "./pages/PlaysCat";

import {AnimatePresence} from "framer-motion";
// DoggySide
import {PlaysDog} from "./pages/PlaysDog";
import {DogStereotypes} from "./pages/DogStereotypes";
import {FoodDog} from "./pages/FoodDog"
import {OccursDog} from "./pages/OccursDog"
import AboutDog from './pages/Aboutdog';



function AnimatedRoutes (){
  const location = useLocation ();
    return(
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeSite />}></Route>
        <Route path="/Cat-Facts" element={<CatFacts/>}></Route>
        <Route path="/Dog-Facts" element={<DogFacts/>}></Route>
        <Route path="/i-told-you" element={<ErrFourZeroFour />}></Route>
{/* kitty links */}
        <Route path="/Cat-Facts/About-Cat" element={<AboutCat />}></Route>
        <Route path="/Cat-Facts/food" element={<FoodCat />}></Route>
        <Route path="/Cat-Facts/Occurs" element={<CatOccurs />}></Route>
        <Route path="/cat-facts/stereotypes" element={<CatStereotypes />}></Route>
        <Route path="/cat-facts/plays" element={<PlaysCat />}></Route>

        {/* doggy links */}
        <Route path="/dog-Facts/About-Dog" element={<AboutDog />}></Route>
        <Route path="/dog-Facts/food" element={<FoodDog />}></Route>
        <Route path="/dog-Facts/Occurs" element={<OccursDog />}></Route>
        <Route path="/dog-facts/stereotypes" element={<DogStereotypes />}></Route>
        <Route path="/dog-facts/plays" element={<PlaysDog />}></Route>
      </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes