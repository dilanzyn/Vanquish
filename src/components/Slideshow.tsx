import Button from "./Button";
import "./Slideshow.css";
import Images from "../assets/assets";

import React, { useState, useEffect } from "react";

// Define the types for props
interface SlideshowProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Move to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle autoplay functionality
  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(goToNextSlide, interval);
      return () => clearInterval(timer); // Cleanup interval on unmount or when autoPlay changes
    }
  }, [autoPlay, interval, currentIndex]);

  return (
    <div className="slideshow">
      <Button
        icon={Images.Icons.ArrowLeft}
        onClick={goToPrevSlide}
        className="p-2"
      ></Button>
      <div className="slideshow-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide"
        />
      </div>
      <Button
        icon={Images.Icons.ArrowRight}
        onClick={goToNextSlide}
        className="p-2"
      ></Button>
    </div>
  );
};

export default Slideshow;
