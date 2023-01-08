import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {motion} from "framer-motion";

export function PlaysDog() {
  return (
    <>
      <>
        <div className="cat-facts-container">
          <div className="small-cat-box1">
          <Link className="nav-link" to="/dog-facts/about-dog">
              <button className="btn btn-outline-primary">About cat</button>
            </Link>
            <Link className="nav-link" to="/dog-facts/occurs">
              <button className="btn btn-outline-primary">Occurs</button>
            </Link>
            <Link className="nav-link" to="/dog-facts/food">
              <button className="btn btn-outline-primary">Food</button>
            </Link>
            <Link className="nav-link" to="/dog-facts/plays">
              <button className="btn btn-outline-primary">Plays</button>
            </Link>
            <Link className="nav-link" to="/dog-facts/stereotypes">
              <button className="btn btn-outline-primary">Stereotypes</button>
            </Link>
          </div>
         
          <motion.div className="big-cat-box"
          intial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity:0}}>
            {" "}
            <div className="box-for-photo-cat3"></div>
           
            <p className="cat-facts-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis sapien nec nunc pharetra, quis blandit purus viverra.
            Phasellus luctus semper dolor in accumsan. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Morbi eget turpis ac lacus vestibulum laoreet quis at
            lectus. Proin tincidunt justo ut odio cursus fermentum. Vivamus
            vulputate ipsum non dolor pellentesque egestas. Ut fringilla
            ultricies justo, vitae pharetra enim varius ut. Nunc scelerisque
            lectus a justo tristique viverra. Donec sagittis quis felis ac
            consequat. Fusce viverra sodales enim at venenatis. Nam quis ex
            vitae ante tristique cursus sed ut ligula. Integer ornare feugiat
            dolor. Nullam in massa consequat, consectetur tortor ut, bibendum
            justo. Fusce maximus nunc at ante venenatis venenatis. Aliquam
            malesuada eros eu nisl convallis, placerat rutrum nisi convallis.
            Maecenas facilisis risus nec feugiat tristique. Maecenas rhoncus
            urna sed blandit ultricies. Nulla consectetur massa cursus,
            finibus leo sed, porttitor magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis sapien nec nunc pharetra, quis blandit purus viverra.
            Phasellus luctus semper dolor in accumsan. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Morbi eget turpis ac lacus vestibulum laoreet quis at
            lectus. Proin tincidunt justo ut odio cursus fermentum. Vivamus
            vulputate ipsum non dolor pellentesque egestas. Ut fringilla
            ultricies justo, vitae pharetra enim varius ut. Nunc scelerisque
            lectus a justo tristique viverra. Donec sagittis quis felis ac
            consequat. Fusce viverra sodales enim at venenatis. Nam quis ex
            vitae ante tristique cursus sed ut ligula. Integer ornare feugiat
            dolor. Nullam in massa consequat, consectetur tortor ut, bibendum
            justo. Fusce maximus nunc at ante venenatis venenatis. Aliquam
            malesuada eros eu nisl convallis, placerat rutrum nisi convallis.
            Maecenas facilisis risus nec feugiat tristique. Maecenas rhoncus
            urna sed blandit ultricies. Nulla consectetur massa cursus,
            finibus leo sed, porttitor magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis sapien nec nunc pharetra, quis blandit purus viverra.
            Phasellus luctus semper dolor in accumsan. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Morbi eget turpis ac lacus vestibulum laoreet quis at
            lectus. Proin tincidunt justo ut odio cursus fermentum. Vivamus
            vulputate ipsum non dolor pellentesque egestas. Ut fringilla
            ultricies justo, vitae pharetra enim varius ut. Nunc scelerisque
            lectus a justo tristique viverra. Donec sagittis quis felis ac
            consequat. Fusce viverra sodales enim at venenatis. Nam quis ex
            vitae ante tristique cursus sed ut ligula. Integer ornare feugiat
            dolor. Nullam in massa consequat, consectetur tortor ut, bibendum
            justo. Fusce maximus nunc at ante venenatis venenatis. Aliquam
            malesuada eros eu nisl convallis, placerat rutrum nisi convallis.
            Maecenas facilisis risus nec feugiat tristique. Maecenas rhoncus
            urna sed blandit ultricies. Nulla consectetur massa cursus,
            finibus leo sed, porttitor magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.

          </p>
          
          
          <Link className="" to="/dog-facts"><button className="btn btn-outline-primary">Home</button></Link>
           <Link className="" to="/dog-facts/food"><button className="btn btn-outline-primary">Previous</button></Link>
           <Link className="" to="/dog-facts/stereotypes"><button className="btn btn-outline-primary">Next</button></Link>
           <Link className="" to="/dog-facts/stereotypes"><button className="btn btn-outline-primary">Last</button></Link>
          
          </motion.div>
        <div className="funFact">
        <p className="api-info-cat">Random info about dog</p>
      <Link className="nav-link" to="/">
              <button className="btn btn-outline-primary">Back to Main page</button>
            </Link>
        </div>
        </div>
      
      </>
    </>
  );
}

export default PlaysDog;
