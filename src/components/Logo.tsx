import { useState, useEffect } from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" strokeWidth="0.5" strokeDasharray="2 2" stroke="currentColor">
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI) / 6;
        const cx = 50 + Math.cos(angle) * 16;
        const cy = 50 + Math.sin(angle) * 16;
        return <circle key={i} cx={cx} cy={cy} r={28} />
      })}
    </svg>
  );
}

export function GeometricText({ text }: { text: string }) {
  const [display, setDisplay] = useState('');
  
  useEffect(() => {
    const chars = '■▲●◩⬡▱◈◧◇◆□△▽';
    let iteration = 0;
    let direction = 1;
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    let isMounted = true;

    const tick = () => {
      if (!isMounted) return;
      
      setDisplay(() => {
        const currentMax = Math.floor(iteration);
        
        const newStr = text.split('').map((char, index) => {
          if (index < currentMax) {
            return char;
          }
          if (index >= currentMax && index < currentMax + 3) {
            return char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
          }
          return '';
        }).join('');

        iteration += (1/3) * direction;

        if (direction === 1 && iteration >= text.length + 1) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            if (!isMounted) return;
            direction = -1;
            interval = setInterval(tick, 30);
          }, 4000);
        } else if (direction === -1 && iteration <= -3) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            if (!isMounted) return;
            direction = 1;
            interval = setInterval(tick, 30);
          }, 1000);
        }

        return newStr;
      });
    };

    interval = setInterval(tick, 30);

    return () => {
      isMounted = false;
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0">{display}</span>
    </span>
  );
}
