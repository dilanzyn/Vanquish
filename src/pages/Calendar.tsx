import React from "react";
import "./Calendar.css";

const Calendar: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="w-full pt-32 pb-12 flex justify-center items-center bg-black bg-Calendar text-center opacity-0 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold font-Inter tracking-widest">
          CALENDAR
        </h1>
      </header>

      {/* Calendar Section with Background Image */}
      <div
        className="w-full flex justify-center px-4 py-16 relative bg-cover bg-center bg-SectionCalendar"
      >
        {/* Dark Overlay for Better Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Google Calendar Embed with Dark Mode Effect */}
        <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-lg border border-gray-700">
          <iframe
            className="w-full h-[500px] md:h-[600px] lg:h-[700px] filter invert-[1] hue-rotate-[180deg] contrast-[90%] brightness-[90%]"
            src="https://calendar.google.com/calendar/embed?src=af9c483437fcf3b9ec894714552a7b9a058db7073162c1c8e953d0d8a61d0836%40group.calendar.google.com&ctz=Asia%2FColombo"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Calendar;


