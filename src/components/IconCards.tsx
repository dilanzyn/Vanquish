import React from 'react';
import './IconCards.css';

interface IconCardsProps {
  text?: string;
  icon?: string | React.ReactNode;
}

const IconCards: React.FC<IconCardsProps> = ({ text, icon }) => {
  return (
    <div className="icon-cards">
      {typeof icon === 'string' ? (
        <img src={icon} alt={text} className="h-[120px] w-[120px] lg:h-[100px] lg:w-[100px]" />
      ) : (
        <>{icon}</>
      )}
      <p className="text-[1.2rem] lg:text-[1rem]">{text}</p>
    </div>
  );
};

export default IconCards;