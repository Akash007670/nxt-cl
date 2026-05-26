import React, { HTMLAttributes } from "react";
import "./Tag.css";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: "primary" | "success" | "warning" | "danger" | "secondary";
  size?: "sm" | "md";
  removable?: boolean;
  onRemove?: () => void;
}

const Tag: React.FC<TagProps> = ({
  label,
  variant = "secondary",
  size = "md",
  removable = false,
  onRemove,
  className = "",
  ...props
}) => {
  return (
    <span className={`tag tag-${variant} tag-${size} ${className}`} {...props}>
      {label}
      {removable && (
        <button type="button" onClick={onRemove} aria-label="Remove tag">
          ×
        </button>
      )}
    </span>
  );
};

export default Tag;
