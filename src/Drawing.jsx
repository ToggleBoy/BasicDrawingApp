import { useState } from "react";

const DrawingArea = () => {
  const [dots, setDots] = useState([]);
  const [removeDots, setremoveDots] = useState([]);

  const handleMouseDown = (event) => {
    const x_axis = event.clientX;
    const y_axis = event.clientY;
    const dot = { x_axis, y_axis };
    setDots([...dots, dot]);
    setremoveDots([]);
  };
  
  const handleUndo = () => {
    if (dots.length > 0) {
      let undoDot = dots[dots.length - 1];
      setDots(dots.slice(0, dots.length - 1));
      setremoveDots([...removeDots, undoDot]);
    }
  };

  const handleRedo = () => {
    if (removeDots.length > 0) {
      let redoDot = removeDots[removeDots.length - 1];
      setremoveDots(removeDots.slice(0, removeDots.length - 1));
      setDots([...dots, redoDot]);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
      <div className="drawingArea" onClick={handleMouseDown} >
        {dots.map((dot, index) => (
          <div
            key={index}
            style={{
              left: `${dot.x_axis}px`,
              top: `${dot.y_axis}px`,
            }}
            className="dots"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DrawingArea;
