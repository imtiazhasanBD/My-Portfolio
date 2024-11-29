"use client";
import React, { useEffect, useState, useRef } from "react";

const CircularProgress = ({ percentage, color, icon, speed = 20 }) => {
  const [progressStartValue, setProgressStartValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const progress = setInterval(() => {
        setProgressStartValue((prev) => {
          if (prev === percentage) {
            clearInterval(progress);
            return prev;
          }
          return prev + 1;
        });
      }, speed);

      return () => clearInterval(progress); // Cleanup
    }
  }, [isVisible, percentage, speed]);

  return (
    <div
      ref={ref}
      className="w-28 h-28 rounded-full bg-customGradient flex items-center justify-center"
      style={{
        background: `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg`,
      }}
    >
      <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
        <i className={`${color} text-5xl`}>{icon}</i>
      </div>
    </div>
  );
};

export default CircularProgress;
