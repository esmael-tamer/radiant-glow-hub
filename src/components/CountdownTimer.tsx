import { useState, useEffect } from "react";
import aromaLogo from "@/assets/aroma logo.jpg";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 30,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set end time to 30 hours from first visit
    const storageKey = 'jayden_offer_end_time';
    let endTime = localStorage.getItem(storageKey);

    if (!endTime) {
      const newEndTime = new Date();
      newEndTime.setHours(newEndTime.getHours() + 30);
      endTime = newEndTime.getTime().toString();
      localStorage.setItem(storageKey, endTime);
    }

    const endDate = parseInt(endTime);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        setTimeLeft({
          hours: totalHours,
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-cream text-primary font-bold text-sm sm:text-base md:text-lg w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md flex items-center justify-center shadow-sm">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="text-primary-foreground/80 text-[8px] sm:text-[10px] mt-0.5">{label}</span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm py-1.5 sm:py-2 shadow-lg">
      <div className="container mx-auto px-3 flex items-center justify-between">
        {/* Logo */}
        <img
          src={aromaLogo}
          alt="Aroma Amore"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gold/50"
        />

        {/* Countdown */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2" dir="ltr">
          <TimeBox value={timeLeft.hours} label="ساعة" />
          <div className="text-cream text-lg sm:text-xl font-bold">:</div>
          <TimeBox value={timeLeft.minutes} label="دقيقة" />
          <div className="text-cream text-lg sm:text-xl font-bold">:</div>
          <TimeBox value={timeLeft.seconds} label="ثانية" />
        </div>

        {/* Offer Text */}
        <div className="text-gold font-bold text-xs sm:text-sm">
          عرض محدود!
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
