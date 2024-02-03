import React from "react";
import "./button.scss";
export interface IButtonProps {
  label: string;
  cn?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg" | "xl";
  variants?:
    | "primary"
    | "secondary"
    | "ghost"
    | "success"
    | "danger"
    | "info"
    | "outlined";
  color?: string;
  iconLeft?: React.JSX.Element;
  iconRight?: React.JSX.Element;
}

const Button = ({
  label,
  cn,
  type = "button",
  size = "md",
  variants,
  color,
  iconLeft,
  iconRight,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={`button btn-${size} ${variants} ${cn}`}
      type={type}
      {...rest}
      style={{
        color: color ? color || "black" : "",
        border: variants === "outlined" ? `2px solid ${color || "black"}` : "",
      }}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {label && <span>{label}</span>}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;
