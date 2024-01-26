import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import ExternalLinks from "./Components/ExternalLinks";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import MainView from "./Components/Projects/MainView";

function App() {
  const [isMobile,setIsMobile]= useState("");
  useEffect(()=>{
    window.innerWidth<700 ? setIsMobile(true) : setIsMobile(false);
  },[])
  return (
    <div className="flex flex-col dark:bg-black ">
      <NavBar mobile={isMobile}/>
      <Hero mobile={isMobile} />
      <ExternalLinks />
      {/* <MainView /> */}
      {/* <About /> */}
      {/* <Testimonial /> */}
    </div>
  );
}

export default App;
