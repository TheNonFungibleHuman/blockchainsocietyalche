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
  const [display, setDisplay] = useState(text);
  
  useEffect(() => {
    const chars = '■▲●◩⬡▱◈◧';
    const interval = setInterval(() => {
      const arr = text.split('');
      const numChanges = Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < numChanges; i++) {
        const idx = Math.floor(Math.random() * arr.length);
        if (arr[idx] !== ' ') {
          arr[idx] = chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplay(arr.join(''));
      
      setTimeout(() => {
        setDisplay(text);
      }, 150);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
}
