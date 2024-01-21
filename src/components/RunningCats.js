// RunningCats.js
import React from 'react';
import { FaCat } from 'react-icons/fa';
import './RunningCats.css';

const RunningCats = () => {
  const numberOfCats = 5;

  const cats = Array.from({ length: numberOfCats }, (_, index) => {
    const style = {
      top: `${Math.random() * 90 + 5}%`, // Random top position between 5% and 95%
      left: `${Math.random() * 90 + 5}%`, // Random left position between 5% and 95%
      fontSize: `${Math.random() * 3 + 1}em`, // Random font size between 1em and 4em
    };
    return <FaCat key={index} className={`cat cat-${index}`} style={style} />;
  });

  return <div className="running-cats">{cats}</div>;
};

export default RunningCats;
