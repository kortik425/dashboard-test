import React from "react";

interface TooltipProps {
  tooltipId: string;
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipId, text, children }) => {
  return (
    <div className="relative group inline-block">
      <span
        id={tooltipId}
        role="tooltip"
        className="absolute invisible group-hover:visible z-10 w-[120px] bg-black text-white text-center py-1 rounded-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2 pointer-events-none"
      >
        {text}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
