import React from "react";
import { ReactNode, forwardRef, InputHTMLAttributes } from "react";
import "./floatingInput.css";

export interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  endIcon?: ReactNode;
  label: string;
  className?: string;
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className = "", type, ...props }, ref) => {
    const { endIcon, label } = props;
    return (
      <div className="input-container">
        <input
          type={type}
          className={`input peer ${className}`}
          placeholder=""
          ref={ref}
          {...props}
        />
        <label htmlFor={label} className="label">
          {label}
        </label>
        {endIcon && <span className="icon end">{endIcon}</span>}
      </div>
    );
  }
);

export default FloatingInput;
