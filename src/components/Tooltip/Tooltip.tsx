import React, { HTMLAttributes, ReactNode } from "react";
import "./Tooltip.css";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  label,
  position = "top",
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`tooltip tooltip-${position} ${className}`} {...props}>
      {children}
      <span className="tooltip-text">{label}</span>
    </div>
  );
};

export default Tooltip;
