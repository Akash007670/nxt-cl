import React, { HTMLAttributes, ReactNode } from "react";
import { X } from "react-feather";
import "./Alert.css";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "warning" | "danger" | "info";
  title?: string;
  onClose?: () => void;
  closeButton?: boolean;
  children: ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  onClose,
  closeButton = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`alert alert-${variant} ${className}`} {...props}>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {closeButton && (
        <button
          className="alert-close-btn"
          onClick={onClose}
          aria-label="Close alert"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Alert;
