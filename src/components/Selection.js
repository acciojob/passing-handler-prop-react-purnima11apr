
import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [color, setColor] = useState({ background: '' });

  const handleClick = () => {
    applyColor(setColor);
  };

  return (
    <div className="fix-box" style={{ width: '200px', height: '200px', margin: '10px', background: color.background }} onClick={handleClick}>
    <h2 className="subheading">Selection</h2>
  </div>
  );
};

export default Selection;
