import React, { useState, useEffect } from 'react';
import './Bubbles.css'; // Import your CSS file for styling

const BubbleEffect = () => {
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setSplash(true);
      const splashElement = document.createElement('div');
      splashElement.className = 'splash';
      splashElement.style.left = `${event.clientX}px`;
      splashElement.style.top = `${event.clientY}px`;
      document.body.appendChild(splashElement);

      setTimeout(() => {
        setSplash(false);
        document.body.removeChild(splashElement);
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`app ${splash ? 'splash-active' : ''}`}>
      {/* Your app content */}
    </div>
  );
};
export default BubbleEffect;
