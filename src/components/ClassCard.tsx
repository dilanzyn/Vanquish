import React, { useState } from 'react';
import Button from './Button';

interface ClassCardsProps {
  heading?: string;
  description?: string;
  image?: string | React.ReactNode;
  content?: React.ReactNode;
}

const ClassCard: React.FC<ClassCardsProps> = ({ description, heading, image, content }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <div className="bg-black border border-white rounded-lg shadow-lg overflow-hidden w-full max-w-[480px] sm:max-w-[600px] lg:max-w-[700px] mx-auto font-Inter">
      {/* Image Section (Responsive) */}
      <div className="relative w-full">
        {typeof image === 'string' ? (
          <img src={image} className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover" alt="Class Image" />
        ) : (
          <>{image}</>
        )}
      </div>

      {/* Heading & Description */}
      <div className="border-t-2 border-b-2 border-white py-4 px-6 text-center">
        {heading && <h3 className="text-white font-bold text-lg sm:text-xl">{heading}</h3>}
        <p className="text-sm sm:text-md md:text-[1.2rem] lg:text-[0.8rem] text-gray-300 mt-2 md:py-4 lg:py-1">{description}</p>
      </div>

      {/* Toggle Button */}
      <div className="p-4 text-center">
        <Button
          className="flex items-center justify-center mx-auto bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
          text={showMoreDetails ? "See Less Details" : "See More Details"}
          onClick={handleToggleDetails}
        />
      </div>

      {/* Extra Content (Toggles On Click) */}
      <div className={`px-6 py-4 text-sm text-gray-300 border-white border-t border-gray-700 transition-all duration-500 ${showMoreDetails ? "block" : "hidden"}`}>
        {content}
      </div>
    </div>
  );
};

export default ClassCard;

