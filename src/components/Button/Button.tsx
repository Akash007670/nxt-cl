import React from "react";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import "./button.css";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "success"
    | "danger"
    | "info"
    | "outlined";
  loading?: boolean;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      btnText = "Button",
      variant = "primary",
      rounded = "md",
      size = "md",
      className,
      loading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`button button-${variant} btn-${size} radius-${rounded} ${
          loading || props.disabled ? "btn-disabled" : ""
        } ${className}`}
        disabled={loading || props.disabled}
      >
        {startIcon && !loading && <span>{startIcon}</span>}
        {btnText}
        {loading ? <Spinner /> : null}
        {endIcon && !loading && <span>{endIcon}</span>}
      </button>
    );
  }
);

export default Button;

export const Spinner = () => {
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
