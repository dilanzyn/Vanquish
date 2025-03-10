import { useState } from "react";
import "./Achievements.css";

const achievementsData: Record<
  number,
  { achievements: { title: string; details: string[] }[]; image: string }
> = {
  2025: {
    achievements: [
      { 
        title: "Srilanka Muay Thai Nationals", 
        details: [
          "Gevin Linden – Senior - 75kg – National Champion",
          "Giridharan Kaneson- Senior - 71g - National Champion",
          "Pasindu Vihangana - Senior - 48kg -Champion",
          "Tehan Kumarasinghe - Under 23 - 85kg - National Champion"
        ],
        
      },
      { 
        title: "WBC Muay Thai Championship", 
        details: [
          "Miyushi Dharmaratne – Super bantamweight – Champion",
          "Gevin Linden – Heavyweight – Champion"
        ],
        
      }
    ],
    image: "/images/2025-trophy.jpg",
  },
  2024: {
    achievements: [
      {
        title: "Amazing Muay Thai Festival – Held in Thailand",
        details: [
          "Giridharan Kaneson – Won the 1st fight and qualified to the Quarter finals",
          "Vindula Jayasinghe – Featherweight – Participated",
          "Shanaka Weerasinghe – Participated",
          "Gevin Linden – Adult B class – 75kg – 1st fight win against Scotland / lost 2nd fight against Brazil"
        ]
      },
      {
        title: "Karma Fight League",
        details: [
          "Dilshan Sriskandarajah - Open weight – 2nd place"
        ]
      },
      {
        title: "WBC Amateur Muay Thai Championship",
        details: [
          "Pasindu Vihangana – 48kg - *Bronze medal",
          "Nilaksha Gajaman – 60kg - Gold medal",
          "Sashi Schaffter – 60kg - Silver medal",
          "Amanda Portier – 71kg – Gold Medal",
          "Kamil Ismail – 86kg – Gold Medal",
          "Nishika Atkinson – Featherweight – Gold medalist",
          "Vindula Jayasinghe – Featherweight – Silver medalist",
          "Afdhal Ashraf – 71kg – Bronze medal",
          "Sanesh Fonseka – 45kg – Bronze medal",
          "Rumesh Rathnayake – 75kg – Silver medal",
          "Jeeth Jayadewa – 60kg - Silver medal",
          "Dilshan Sriskandarajah – 71kg – Silver medalist",
          "Vanquish Muay Thai & Fitness – 1st runner up"
        ]
      },
      {
        title: "Combat By Jesh",
        details: [
          "Shanaka Weerasinghe – 86kg – Gold medalist",
          "Giridharan Kaneson – 72kg – Silver medalist"
        ]
      },
      {
        title: "Gevin Linden – First Sri Lankan to compete in Thai Fight League (Kard Chuek)",
        details: []
      }
    ],
    image: "/images/2024-trophy.jpg",
  },
  2023: {
    achievements: [
      {
        title: "WBC Amateur Muay Thai Championship",
        details: [
          "Viraine Senadheera – 60kg *Bronze medal",
          "Kavishke Fernando – 51kg * Silver medal",
          "Hansana Balasuriya – 54kg * Silver medal",
          "Sachin Rajaratnam – Super heavy weight - Bronze medal",
          "Afdhal Ashraf – 75kg – Bronze medal",
          "Raveen Weeraratne – 75kg - Bronze medal",
          "Natalie De Silva – 51kg - Gold medalist & Best Female Boxer Award",
          "Shanaka Weerasinghe – 91kg – Gold medal",
          "Madara Fonseka – Silver medal",
          "Brian Choltan – Silver medal",
          "Gevin Linden – 75kg – Gold medal",
          "Vanquish Muay Thai & Fitness – 1st runner up"
        ]
      },
      {
        title: "Fight Like A Girl by WBC Sri Lanka",
        details: [
          "Hansana Balasuriya – Super bantamweight – Gold medalist",
          "Vindula Jayasinghe – Featherweight – Gold Medalist",
          "Natalie De Silva – Flyweight - Silver Medalist",
          "Madara Fonseka – Lightweight – Gold Medalist"
        ]
      },
      {
        title: "Karma Fight League",
        details: [
          "Hansana Balasuriya – Super Bantamweight – 2nd place",
          "Divya Abeysinghe – Under 45kg – Winner",
          "Gevin Linden – 72kg – Winner"
        ]
      },
      {
        title: "WBC Muay Thai Championship",
        details: [
          "Hansana Balasuriya – super-flyweight – Silver medal",
          "Giridharan Kaneson – Middleweight - Winner",
          "Vindula Jayasinghe – Super-Bantamweight - Silver medalist",
          "Natalie De Silva – Light-Flyweight – Silver medalist",
          "Gevin Linden – 75kg – Champion (Won the WBC muay thai belt)"
        ]
      },
      {
        title: "National Muay Thai Tournament",
        details: [
          "Kamil Ismail- 86kg **Silver medal",
          "Divya Abeysinghe - Under 45kg - *Gold medalist & Best Female Fighter Award (Over 21 years)",
          "Sashi Schaffter – 60kg – Bronze medal",
          "Dilshan Sriskandarajah – 75kg – Silver medalist"
        ]
      }
    ],
    image: "/images/2023-trophy.jpg",
  },
  2022: {
    achievements: [
      {
        title: "WBC Muay Thai Championship",
        details: [
          "Miyushi Dharmaratne – Super bantamweight – Champion",
          "Gevin Linden – Heavyweight – Champion"
        ]
      },
      {
        title: "World Muay Thai Championship by the International Muay Thai Organization (IMO) – Held in Indonesia",
        details: [
          "Gevin Linden – 81kg – Champion"
        ]
      }
    ],
    image: "/images/2022-trophy.jpg",
  },
};

const Achievements: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pb-16 px-6">
      {/* Title */}
        <header className="w-full pt-32 pb-12 flex justify-center items-center bg-black bg-Achievements text-center opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold font-Inter">ACHIEVEMENTS</h1>
        </header>
      
      {/* Year Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl h-[24rem] pt-16">
        {[2022, 2023, 2024, 2025].map((year) => (
          <button
            key={year}
            className="rounded-lg p-6 text-[2rem] xl:text-[3rem] font-semibold shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Achievements Modal */}
      {selectedYear !== null && (
        <div 
          className="fixed top-[80px] left-0 right-0 bottom-0 flex justify-center items-center bg-transparent"
          onClick={() => setSelectedYear(null)}
        >
          <div 
            className="bg-black p-6 rounded-lg w-[450px] h-[550px] text-center shadow-lg border border-gray-700 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold">{selectedYear} Achievements</h2>
            <div className="mt-4 space-y-4 text-gray-300 flex-1 overflow-y-auto scrollbar-hide p-2">
              {achievementsData[selectedYear]?.achievements.map((achievement, i) => (
                <div key={i} className="bg-transparent p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  <ul className="list-none list-inside text-base text-gray-400 mt-2">
                    {achievement.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )) || <p>No data available.</p>}
            </div>

            {/* Achievement Image
            {achievementsData[selectedYear]?.image && (
              <img
                src={achievementsData[selectedYear]?.image}
                alt={`Trophy ${selectedYear}`}
                className="mt-4 w-full h-24 object-cover rounded-lg shadow-lg"
              />
            )} */}

            <button
              className="mt-4 bg-red-900 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold"
              onClick={() => setSelectedYear(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;