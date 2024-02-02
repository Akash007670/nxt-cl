import React from "react";

export interface IButtonProps {
  label: string;
  cn?: string;
}

const Button = (props: IButtonProps) => {
  const { label, cn } = props;
  return <button className={`${cn}`}>{label}</button>;
};

export default Button;
