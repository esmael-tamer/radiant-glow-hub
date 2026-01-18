import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set end date to 3 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-cream text-primary font-bold text-2xl md:text-3xl w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-card">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="text-primary-foreground/80 text-sm mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 md:gap-4 mt-6" dir="ltr">
      <TimeBox value={timeLeft.days} label="يوم" />
      <div className="text-cream text-2xl md:text-3xl font-bold self-start mt-4">:</div>
      <TimeBox value={timeLeft.hours} label="ساعة" />
      <div className="text-cream text-2xl md:text-3xl font-bold self-start mt-4">:</div>
      <TimeBox value={timeLeft.minutes} label="دقيقة" />
      <div className="text-cream text-2xl md:text-3xl font-bold self-start mt-4">:</div>
      <TimeBox value={timeLeft.seconds} label="ثانية" />
    </div>
  );
};

export default CountdownTimer;
