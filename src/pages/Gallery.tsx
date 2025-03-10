import React from "react";
import GalleryCom from "../components/GalleryCom";
import "./Gallery.css";
import Footer from "../components/Footer";

const Gallery: React.FC = () => {
  return (
    <div className="bg-black h-screen">
      <header className="h-[40%] pt-[8rem] mx-auto flex justify-center items-center bg bg-black text-white text-center opacity-0 animate-fade-in-up">
        <h1 className="text-[4rem] md:text-[6rem] 2xl:text-[8rem] font-bold font-Inter">
          GALLERY
        </h1>
      </header>
      <main className="py-[5rem] px-[2rem] bg-black">
        <GalleryCom />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div> 
  );
};

export default Gallery;
