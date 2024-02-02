import React from "react";
import "./button.module.scss";
export interface IButtonProps {
  label: string;
  cn?: string;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const { label, cn, type, handleClick } = props;
  const buttonClass = cn ? `button ${cn}` : "button";

  return (
    <button className={buttonClass} type={type} onClick={handleClick}>
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
