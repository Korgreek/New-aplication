import { Link } from "react-router-dom";
import {motion} from "framer-motion";

export const HomeSite = () =>{
    return (
        <motion.div className="parent"
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}>

        <div className="cat-box">
            <div className="box-shadow text-center ">
            <Link className="" to="/cat-facts"><button className="btn btn-outline-light">Check info about cat</button></Link>
            </div>
             </div>
        <div className="dog-box">
        <div className="box-shadow text-center">
        <Link className="" to="/dog-facts"><button className="btn btn-outline-light">Check info about dog</button></Link></div> </div>
        <div className="random-info-box-home"> 
        <p>
        The application was created while learning javascript framework - React.js</p>
        <p>Dog section under construction. Content supplemented using Lorem. Work on aesthetics.Work on aesthetics for two departments, "Cat" and "Dog".</p></div>
        </motion.div>
        
    )
}

