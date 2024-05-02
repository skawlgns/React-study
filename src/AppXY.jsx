import React, { useState, useEffect } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [coord, setCoord] = useState({ clientX: 0, clientY: 0 });

  const getMousePosition = (e) => ({ clientX: e.clientX, clientY: e.clientY });

  const mouseMove = (e) => {
    setCoord(getMousePosition(e));
  };

  // useEffect(() => {
  //   console.log(coord);
  // }, [coord]);

  return (
    <div className="container" onMouseMove={mouseMove}>
      <div className="pointer" style={getPointerStyle(coord)}></div>
    </div>
  );
}

function getPointerStyle({ clientX, clientY }) {
  return {
    transform: `translate(${clientX}px, ${clientY}px)`,
  };
}
