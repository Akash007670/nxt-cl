import React, { HTMLAttributes } from "react";
import "./Card.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "outlined" | "filled";
  padding?: "sm" | "md" | "lg";
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  variant = "outlined",
  padding = "md",
  hoverable = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={`card card-${variant} card-pd-${padding} ${
        hoverable ? "card-hoverable" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
