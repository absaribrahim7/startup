
import React, { useEffect, useState, useRef } from 'react';

const Milestones = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animateNumber = (targetNumber) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // Animation duration in ms
      const intervalTime = 20; // Time between updates
      const steps = duration / intervalTime;
      const increment = parseInt(targetNumber.replace(/,/g, ''), 10) / steps;

      let count = 0;
      const interval = setInterval(() => {
        count += increment;
        if (count >= parseInt(targetNumber.replace(/,/g, ''), 10)) {
          setCurrent(targetNumber);
          clearInterval(interval);
        } else {
          setCurrent(Math.floor(count).toLocaleString());
        }
      }, intervalTime);

      return () => clearInterval(interval);
    }, [isVisible, targetNumber]);

    return current;
  };

  return (
    <div ref={sectionRef} className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-4xl font-bold text-blue-600">
                {animateNumber(stat.number)}
              </h2>
              <p className="text-lg text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestones;
