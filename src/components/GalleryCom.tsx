import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import React Icons
import Images from "../assets/assets";

const images = [
  Images.Images.Slide1,
  Images.Images.Slide2,
  Images.Images.Slide3,
  Images.Images.Slide4,
  Images.Images.Kid,
  Images.Images.intermediate,
];

const GalleryCom: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-black min-h-screen p-4">
      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(src)} // Open Modal on Click
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal - Enlarged Image (Pop-Up) */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
          onClick={() => setSelectedImage(null)} // Close when clicking outside
        >
          <div className="relative p-4 w-full max-w-[90%] md:max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl md:text-3xl hover:text-gray-400 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>

            {/* Enlarged Image */}
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCom;
