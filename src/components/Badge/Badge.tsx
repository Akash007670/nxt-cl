import React, { HTMLAttributes, ReactNode } from "react";
import "./Badge.css";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "success" | "warning" | "danger" | "info" | "secondary";
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "pill";
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "md",
  shape = "rounded",
  children,
  className = "",
  ...props
}) => {
  return (
    <span
      className={`badge badge-${variant} badge-${size} badge-${shape} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
