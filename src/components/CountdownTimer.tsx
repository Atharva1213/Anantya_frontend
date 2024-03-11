import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date("March 19, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <p className="countdown p-4 md:p-4 border-4 border-gray-800 rounded-3xl bg-rgb-187-141-58 shadow-md text-yellow-300 text-3xl md:text-5xl lg:text-6xl" style={{paddingTop:"5vh"}}>
        <span id="dayElement" className="inline-block w-full md:w-32 h-20 text-center mb-2 md:mb-0" >
          {days}
          <span className="block text-xl text-gray-500 font-bold">DAYS</span>
        </span>
        <span className="inline-block w-full md:w-32 h-20 text-center">:</span>
        <span id="hourElement" className="inline-block w-full md:w-32 h-20 text-center mb-2 md:mb-0">
          {hours}
          <span className="block text-xl text-gray-500 font-bold">HOURS</span>
        </span>
        <span className="inline-block w-full md:w-32 h-20 text-center">:</span>
        <span id="minElement" className="inline-block w-full md:w-32 h-20 text-center mb-2 md:mb-0">
          {minutes}
          <span className="block text-xl text-gray-500 font-bold">MINS</span>
        </span>
        <span className="inline-block w-full md:w-32 h-20 text-center">:</span>
        <span id="secElement" className="inline-block w-full md:w-32 h-20 text-center">
          {seconds}
          <span className="block text-xl text-gray-500 font-bold">SECS</span>
        </span>
      </p>
    </div>
  );
};

export default CountdownTimer;
