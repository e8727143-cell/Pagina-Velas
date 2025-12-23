
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const StickyTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              // Loop logic: reset to 15 minutes
              hours = 0;
              minutes = 14;
              seconds = 59;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-pink-500 to-violet-600 shadow-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2 md:py-3 flex items-center justify-center gap-2 md:gap-4">
        <Clock className="text-white w-4 h-4 md:w-5 md:h-5 shrink-0" />
        <span className="text-white text-[10px] md:text-sm font-bold tracking-wider uppercase whitespace-nowrap">
          La oferta termina en:
        </span>
        <div className="flex gap-1 font-mono text-lg md:text-2xl font-black text-white">
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.hours)}</span>
          </div>
          <span className="opacity-70">:</span>
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.minutes)}</span>
          </div>
          <span className="opacity-70">:</span>
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyTimer;
