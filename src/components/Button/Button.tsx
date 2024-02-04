import React, { HTMLAttributes } from "react";
import "./button.scss";
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  cn?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg" | "xl";
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl";
  variants?:
    | "primary"
    | "secondary"
    | "ghost"
    | "success"
    | "danger"
    | "info"
    | "outlined";
  color?: string;
  disabled?: boolean;
  iconLeft?: React.JSX.Element;
  iconRight?: React.JSX.Element;
}

const Button = ({
  label,
  cn = "",
  type = "button",
  size = "md",
  borderRadius,
  variants,
  color,
  disabled = false,
  iconLeft,
  iconRight,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={`button btn-${size} radius-${borderRadius} ${
        variants && variants
      } ${cn && cn} ${disabled ? "disable" : ""}`}
      type={type}
      disabled={disabled}
      {...rest}
      style={{
        color: color && !variants ? color || "black" : "",
        border: variants === "outlined" ? `2px solid ${color || "black"}` : "",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {iconLeft && iconLeft}
      {label && label}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
