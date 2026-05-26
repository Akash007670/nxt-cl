import React, { ChangeEvent, HTMLAttributes } from "react";
import "./RadioGroup.css";

export type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface RadioGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  direction?: "row" | "column";
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  direction = "column",
  className = "",
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div
      className={`radio-group radio-group-${direction} ${className}`}
      {...props}
    >
      {options.map((option) => (
        <label key={option.value} className="radio-option">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={option.disabled}
            onChange={handleChange}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
