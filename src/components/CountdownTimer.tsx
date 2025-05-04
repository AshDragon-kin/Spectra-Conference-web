
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the conference date - May 25, 2025
    const targetDate = new Date("2025-05-25T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-8">
      <h2 className="text-xl font-medium text-center mb-4">Event Starts In</h2>
      <div className="flex justify-center gap-4">
        <div className="bg-gray-200 rounded p-4 w-20 text-center">
          <div className="text-3xl font-bold">{days}</div>
          <div className="text-sm text-gray-600">Days</div>
        </div>
        <div className="bg-gray-200 rounded p-4 w-20 text-center">
          <div className="text-3xl font-bold">{hours}</div>
          <div className="text-sm text-gray-600">Hours</div>
        </div>
        <div className="bg-gray-200 rounded p-4 w-20 text-center">
          <div className="text-3xl font-bold">{minutes}</div>
          <div className="text-sm text-gray-600">Minutes</div>
        </div>
        <div className="bg-gray-200 rounded p-4 w-20 text-center">
          <div className="text-3xl font-bold">{seconds}</div>
          <div className="text-sm text-gray-600">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
