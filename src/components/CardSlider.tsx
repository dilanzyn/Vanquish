import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import Images from "../assets/assets";

const CardSlider: React.FC = () => {
  const cards = [
    { id: 1, title: "The slim reaper", image:(Images.Images.Giri), description: "Giridharan Kaneson" },
    { id: 2, title: "The Berserker", image:(Images.Images.GevinF), description: "Gevin Linden" }, 
    { id: 3, title: " Soldier of God", image:(Images.Images.Kavishke), description: "Kavishke Fernando" },
    { id: 4, title: "Skywalker", image:(Images.Images.Pasindu), description: "Pasindu Vihangana" },
    { id: 5, title: "Bubbles", image:(Images.Images.Hansana), description: "Hansana Balasuriya" },
  ];

  // Custom Next Arrow
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div 
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-[5rem] bg-white text-white p-2 rounded-full cursor-pointer z-10 hover:invert"
        onClick={onClick}
      >
        <FaChevronRight size={20} color="black" />
      </div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div 
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-[5rem] bg-white text-white p-2 rounded-full cursor-pointer z-10 hover:invert"
        onClick={onClick}
      >
        <FaChevronLeft size={20} color="black" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 🔥 Default for large screens (1280px+)
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280, // Laptop/Desktop
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  
  
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-2">
            <div className=" p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <img className="" src={card.image}></img>
              <h3 className="text-xl font-semibold text-white pt-8 pb-2">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
