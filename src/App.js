import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
  

function App() {
  
  return (
    
    <div className="App">
   
      
      <Router>
        <NavbarMenu />
        <AnimatedRoutes />
      </Router>

   

    </div>
    
     
  )
}

export default App;
