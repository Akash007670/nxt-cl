import React, { ReactNode, forwardRef } from "react";
import "./Checkbox.css";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode;
  error?: string;
  size?: "sm" | "md" | "lg";
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, size = "md", className = "", ...props }, ref) => {
    return (
      <div className={`checkbox-wrapper ${error ? "checkbox-error" : ""}`}>
        <label className={`checkbox-label checkbox-${size}`}>
          <input
            ref={ref}
            type="checkbox"
            className={`checkbox-input ${className}`}
            {...props}
          />
          <span className="checkbox-custom"></span>
          {label && <span className="checkbox-text">{label}</span>}
        </label>
        {error && <span className="checkbox-error-msg">{error}</span>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
