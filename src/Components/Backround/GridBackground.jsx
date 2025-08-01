import React from 'react';
import './GridBackground.css'; // custom CSS for ::before

const GridBackground = ({children}) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      <div className="absolute inset-0 z-0 grid-overlay" />
      <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl ">
       <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default GridBackground;
