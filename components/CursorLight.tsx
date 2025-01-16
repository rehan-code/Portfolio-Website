'use client';

import { useEffect, useState } from 'react';

export default function CursorLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
      
      // Reset the timeout on each mouse move
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsActive(false), 1000);
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`cursor-light ${isActive ? '' : 'inactive'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
