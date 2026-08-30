import { useEffect, useRef } from 'react';

export default function VantaBackground({ className = '' }) {
  const containerRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !containerRef.current) return;

    let cancelled = false;

    Promise.all([import('three'), import('vanta/dist/vanta.net.min')]).then(([THREE, VANTA]) => {
      if (cancelled || !containerRef.current) return;
      effectRef.current = VANTA.default({
        el: containerRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xc9a463,
        backgroundColor: 0x000000,
        backgroundAlpha: 0,
        points: 8.0,
        maxDistance: 22.0,
        spacing: 18.0,
        showDots: false,
      });
    });

    return () => {
      cancelled = true;
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 z-0 opacity-55 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9),transparent_92%)] ${className}`}
    />
  );
}
