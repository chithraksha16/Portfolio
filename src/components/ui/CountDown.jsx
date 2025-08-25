import { useEffect, useState } from "react";

export default function CountdownTimer() {
  // set the target date (e.g., New Year 2026)
const targetDate = new Date("2025-09-01T00:00:00").getTime();

const [timeLeft, setTimeLeft] = useState(getTimeLeft());

function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

    useEffect(() => {
    const timer = setInterval(() => {
    setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
}, []);

return (
    <div className="text-center text-[10px] sm:text-base font-mono ">
    <div className="flex justify-center gap-1 bg-white/20 p-1 rounded">
        <span className="bg-gray-900 px-1 rounded">{timeLeft.days}d</span>:
        <span className="bg-gray-900 px-1 rounded">{timeLeft.hours}h</span>:
        <span className="bg-gray-900 px-1 rounded">{timeLeft.minutes}m</span>:
        <span className="bg-gray-900 px-1 rounded">{timeLeft.seconds}s</span>
    </div>
    </div>
);
}
