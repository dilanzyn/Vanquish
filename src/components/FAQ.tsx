import React, { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

// Custom Plus Icon SVG
const PlusIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

// Custom Minus Icon SVG
const MinusIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-6 sm:px-12 md:px-20 lg:px-40 xl:px-64 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      {items.map((item, index) => (
        <div key={index} className="border-b border-white py-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex items-center">
              <span className="pr-3 font-bold">{index + 1}.</span>
              <span className="text-lg sm:text-xl">{item.question}</span>
            </div>
            <span className="icon">{activeIndex === index ? <MinusIcon /> : <PlusIcon />}</span>
          </div>
          <AnswerSection isActive={activeIndex === index} answer={item.answer} />
        </div>
      ))}
    </div>
  );
};

// Component for handling the smooth transition of the answer
const AnswerSection: React.FC<{ isActive: boolean; answer: string }> = ({ isActive, answer }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isActive]);

  return (
    <div
      ref={contentRef}
      style={{ maxHeight: height, overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}
      className="faq-answer text-gray-300 bg-black px-4 mt-2 rounded-lg"
    >
      {answer}
    </div>
  );
};

export default FAQ;
