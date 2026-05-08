import React, { forwardRef } from "react";
import "./Toggle.css";

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, size = "md", className = "", ...props }, ref) => {
    return (
      <div className="toggle-wrapper">
        <label className={`toggle-label toggle-${size}`}>
          <input
            ref={ref}
            type="checkbox"
            className={`toggle-input ${className}`}
            {...props}
          />
          <span className="toggle-slider"></span>
        </label>
        {label && <span className="toggle-text">{label}</span>}
      </div>
    );
  },
);

Toggle.displayName = "Toggle";
export default Toggle;
