import React from "react";
import { ReactNode, forwardRef, InputHTMLAttributes } from "react";
import "./floatingInput.css";

export interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  endIcon?: ReactNode;
  className?: string;
  rounded?: "none" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "danger";
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    { rounded = "md", variant = "primary", className = "", type, ...props },
    ref
  ) => {
    const { endIcon, label } = props;
    return (
      <div className="input-container">
        <input
          type={type}
          className={`input peer radius-${rounded} input-${variant} ${className}`}
          placeholder=""
          ref={ref}
          {...props}
        />
        <label htmlFor={label} className={`label label-${variant}`}>
          {label}
        </label>
        {endIcon && <span className="icon end">{endIcon}</span>}
      </div>
    );
  }
);

export default FloatingInput;
