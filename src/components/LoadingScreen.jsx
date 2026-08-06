import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [percent, setPercent] = useState(0);
  const fullText = "< Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setPercent(Math.min(100, Math.round((index / fullText.length) * 100)));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setPercent(100);
        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0e14] text-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#12181f] shadow-[0_0_60px_rgba(126,231,135,0.08)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 chrome-dots">
          <span className="bg-[#ff5f56]" />
          <span className="bg-[#ffbd2e]" />
          <span className="bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-gray-500">booting.sh</span>
        </div>

        <div className="p-6 font-mono">
          <p className="text-xs text-gray-500 mb-3">$ node start --portfolio</p>
          <div className="text-2xl font-bold text-gray-100 mb-6">
            {text}
            <span className="animate-blink ml-1 text-[#7ee787]">|</span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
            <span>compiling assets</span>
            <span>{percent}%</span>
          </div>
          <div className="w-full h-[3px] bg-white/5 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-[#7ee787] shadow-[0_0_15px_#7ee787] animate-loading-bar rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
