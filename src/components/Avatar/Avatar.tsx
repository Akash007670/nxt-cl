import React, { HTMLAttributes, ReactNode } from "react";
import "./Avatar.css";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  fallback?: string;
  children?: ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar",
  size = "md",
  shape = "circle",
  fallback,
  className = "",
  children,
  ...props
}) => {
  const initials = fallback ||
    (typeof children === "string" ? children.slice(0, 2).toUpperCase() : "");

  return (
    <div className={`avatar avatar-${size} avatar-${shape} ${className}`} {...props}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className="avatar-fallback">{initials || "NA"}</span>
      )}
    </div>
  );
};

export default Avatar;
