import { useState, useEffect } from 'react';

export function Countdown() {
  const targetDate = new Date('2026-03-15T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-12 w-full max-w-[100vw] px-4">
      {/* Days */}
      <div className="flex flex-col items-center justify-center text-[#6923d2] text-center">
        <p className="font-['Space_Mono:Bold',sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
          {timeLeft.days}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2">
          Days
        </p>
      </div>

      {/* Colon */}
      <p className="font-['Space_Mono:Bold',sans-serif] text-[#6923d2] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
        :
      </p>

      {/* Hours */}
      <div className="flex flex-col items-center justify-center text-[#6923d2] text-center">
        <p className="font-['Space_Mono:Bold',sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
          {String(timeLeft.hours).padStart(2, '0')}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2">
          Hours
        </p>
      </div>

      {/* Colon */}
      <p className="font-['Space_Mono:Bold',sans-serif] text-[#6923d2] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
        :
      </p>

      {/* Minutes */}
      <div className="flex flex-col items-center justify-center text-[#6923d2] text-center">
        <p className="font-['Space_Mono:Bold',sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
          {String(timeLeft.minutes).padStart(2, '0')}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2">
          Minutes
        </p>
      </div>
    </div>
  );
}
