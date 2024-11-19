"use client";
import React, { useEffect, useState } from "react";

const CircularProgress = ({ percentage, color, icon }) => {
  const [progressStartValue, setProgressStartValue] = useState(0);

  useEffect(() => {
    // Ensure this only runs on the client-side
    if (typeof window !== "undefined") {
      const progress = setInterval(() => {
        setProgressStartValue((prev) => {
          if (prev === percentage) {
            clearInterval(progress);
            return prev;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(progress); // Cleanup the interval on component unmount
    }
  }, [percentage]);

  return (
    <div
      className="w-28 h-28 rounded-full bg-customGradient flex items-center justify-center"
      style={{
        background: `conic-gradient(#7d2ae8 ${
          progressStartValue * 3.6
        }deg, #ededed 0deg`,
      }}
    >
      <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
        <i className={`${color} text-5xl mb-2`}>{icon}</i>
      </div>
    </div>
  );
};

export default CircularProgress;
