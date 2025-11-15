import { useState, useEffect } from 'react';

export function Countdown() {
  // Target date: Set this to your conference date
  // For demo purposes, let's set it to a date in the future
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
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-[88px] w-full px-4">
      {/* Days */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-[32px] items-center justify-center text-[#6923d2] text-center">
        <p className="font-['Space_Mono:Bold',sans-serif] text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-none">
          {timeLeft.days}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
          Days
        </p>
      </div>

      {/* Colon */}
      <p className="font-['Space_Mono:Bold',sans-serif] text-[#6923d2] text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-none">
        :
      </p>

      {/* Hours */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-[32px] items-center justify-center text-[#6923d2] text-center">
        <p className="font-['Space_Mono:Bold',sans-serif] text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-none">
          {String(timeLeft.hours).padStart(2, '0')}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
          Hours
        </p>
      </div>

      {/* Colon */}
      <p className="font-['Space_Mono:Bold',sans-serif] text-[#6923d2] text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-none">
        :
      </p>

      {/* Minutes */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-[32px] items-center justify-center text-[#6923d2] text-center">
        <p className="font-['Space_Mono:Bold',sans-serif] text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-none">
          {String(timeLeft.minutes).padStart(2, '0')}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
          Minutes
        </p>
      </div>
    </div>
  );
}