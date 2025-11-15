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
    <div className="content-stretch flex gap-[88px] items-start relative shrink-0">
      {/* Days */}
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center leading-[90px] relative shrink-0 text-[#6923d2] text-center w-[288px]">
        <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[160px] tracking-[-3.2px] w-full">
          {timeLeft.days}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
          Days
        </p>
      </div>

      {/* Colon */}
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[90px] not-italic relative shrink-0 text-[#6923d2] text-[160px] text-nowrap tracking-[-3.2px] whitespace-pre">
        :
      </p>

      {/* Hours */}
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center leading-[90px] relative shrink-0 text-[#6923d2] text-center w-[193px]">
        <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[160px] tracking-[-3.2px] w-full">
          {String(timeLeft.hours).padStart(2, '0')}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
          Hours
        </p>
      </div>

      {/* Colon */}
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[90px] not-italic relative shrink-0 text-[#6923d2] text-[160px] text-nowrap tracking-[-3.2px] whitespace-pre">
        :
      </p>

      {/* Minutes */}
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center leading-[90px] relative shrink-0 text-[#6923d2] w-[204px]">
        <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[160px] text-right tracking-[-3.2px] w-full">
          {String(timeLeft.minutes).padStart(2, '0')}
        </p>
        <p className="font-['Orbitron:Bold',sans-serif] font-bold relative shrink-0 text-[48px] text-center tracking-[-0.96px] w-full">
          Minutes
        </p>
      </div>
    </div>
  );
}
