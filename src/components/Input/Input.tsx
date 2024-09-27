import React from "react";
import { ReactNode, forwardRef, InputHTMLAttributes } from "react";
import "./input.css";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  rounded?: "none" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "danger";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const {
      placeholder = "Enter here",
      startIcon,
      endIcon,
      variant = "secondary",
      rounded = "md",
    } = props;

    return (
      <div className="input-container">
        {startIcon && <span className="icon start">{startIcon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
          className={`input ${
            startIcon ? "icon-start" : ""
          } radius-${rounded} input-${variant} ${
            props.disabled ? "input-disabled" : ""
          }`}
        />
        {endIcon && <span className="icon end">{endIcon}</span>}
      </div>
    );
  }
);

export default Input;
