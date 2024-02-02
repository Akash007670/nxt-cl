import React from "react";

export interface IButtonProps {
  label: string;
  clasName?: string;
}

const Button = (props: IButtonProps) => {
  const { label, clasName } = props;
  return <button className={`${clasName}`}>{label}</button>;
};

export default Button;
