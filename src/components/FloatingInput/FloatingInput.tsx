import React from "react";
import { ReactNode, forwardRef, InputHTMLAttributes } from "react";
import "./floatingInput.css";

export interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  endIcon?: ReactNode;
  className?: string;
  rounded?: "none" | "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "success" | "danger";
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    { rounded = "md", variant = "default", className = "", type, ...props },
    ref
  ) => {
    const { endIcon, label } = props;
    return (
      <div className="fl-input-container">
        <input
          type={type}
          className={`fl-input peer radius-${rounded} fl-input-${variant} ${className}`}
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
