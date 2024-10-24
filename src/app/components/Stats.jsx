"use client";
import React, { useEffect, useState, useRef } from 'react';

const CountUpAnimation = ({ iconComponent, initialValue, targetValue, text, isVisible }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 8000;

  useEffect(() => {
    if (!isVisible) return; 

    const increment = targetValue > initialValue ? 1 : 0;
    const intervalTime = Math.max(Math.floor(duration / (targetValue - initialValue)), 1);

    const counter = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= targetValue) {
          clearInterval(counter);
          return targetValue;
        }
        return nextValue;
      });
    }, intervalTime);

    return () => clearInterval(counter);
  }, [isVisible, initialValue, targetValue]);

  return (
    <div className="container">
      <div className="icon">{iconComponent}</div>
      <span className="num">{count}</span>
      <span className="text">{text}</span>
    </div>
  );
};

export default function Stats() {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const statsData = [
    { initialValue: 0, targetValue: 2200, label: "Followers", addn: "+" },
    { initialValue: 0, targetValue: 120, label: "Projects", addn: "+" },
    { initialValue: 0, targetValue: 97, label: "Awards", addn: "+" },
  ];

  return (
    <section
      ref={statsRef}
      className="bg-black text-white p-6 md:p-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-2xl md:text-4xl font-bold">
            GET ACQUAINTED WITH <br className="hidden md:inline" /> OUR KEY FACTS
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end md:w-2/3">
          {statsData.map((stat, index) => (
            <div key={index} className="p-4 m-2 text-center w-auto lg:mr-12 lg:ml-12">
              <CountUpAnimation
                initialValue={stat.initialValue}
                targetValue={stat.targetValue}
                text={stat.addn}
                isVisible={isVisible}
              />
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
