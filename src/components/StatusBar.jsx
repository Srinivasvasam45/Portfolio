import { useEffect, useState } from 'react';

const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="hidden md:flex fixed bottom-0 left-0 w-full h-7 z-30 items-center justify-between px-4 bg-[#7ee787] text-[#04120a] font-mono text-[11px] font-medium select-none">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <span className="animate-pulse-dot">●</span> main
        </span>
        <span>build passing</span>
      </div>
      <div className="flex items-center gap-4">
        <span>UTF-8</span>
        <span>React + Tailwind</span>
        <span>{timeString}</span>
      </div>
    </div>
  );
};

export default StatusBar;
