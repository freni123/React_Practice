import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detalis from "./Componets/Detalis";
import { bookData } from "./Componets/Object";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Contact from "./Componets/Contact";
import Result from "./Componets/Result";



function App() {
  
  return (
    <div className="App">
      <Navbar />
      {/* <Detalis />
      <bookData/> */}
      <Routes>
        <Route path="/" exect element={<Home />} />
        <Route path="/About" exect element={<About/>}/>
        <Route path="/Contact" exect element={<Contact/>}/>
        <Route path="/:title" exect element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
