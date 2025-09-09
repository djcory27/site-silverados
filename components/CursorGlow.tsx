'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX - 10}px`;
        glowRef.current.style.top = `${e.clientY - 10}px`;
      }
    };

    const handleMouseDown = () => {
      if (glowRef.current) {
        glowRef.current.classList.add('active');
      }
    };

    const handleMouseUp = () => {
      if (glowRef.current) {
        glowRef.current.classList.remove('active');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
}
