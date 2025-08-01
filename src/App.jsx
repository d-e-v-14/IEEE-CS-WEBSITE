import React, { useState } from "react";
import HeroSection from './homepage/HeroSection';
import OurStory from './homepage/OurStory';
import PreLoader from "./Preloader/Preloader";
import Project from "./Project/Project";
import Board from "./board_section/board";
import Gallery from "./gallery/FilmstripGallery";
import Footer from "./footer/Contact";
import "./gallery/FilmstripGallery.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleEnter = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <PreLoader onEnter={handleEnter} />
      ) : (
        <div className="w-screen min-h-screen overflow-x-hidden">
          <HeroSection />
        </div>

      )}
      
    <div className="w-screen min-h-screen overflow-x-hidden">
    <Project />
    </div>



    <div className="App">
      <Board/>
    </div>


    <div className="min-h-screen bg-neutral-800 flex items-center justify-center">
      <Gallery />
    </div>


    <div className="w-screen min-h-screen overflow-x-hidden">
    <Footer />
    </div>
        
    </>
  );
};

export default App;