import React, { HTMLAttributes, ReactNode, useEffect } from "react";
import "./Snackbar.css";

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title?: string;
  message: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
  duration?: number;
  onClose: () => void;
  actionLabel?: string;
  onAction?: () => void;
  hideCloseButton?: boolean;
}

const Snackbar: React.FC<SnackbarProps> = ({
  open,
  title,
  message,
  variant = "default",
  duration = 4000,
  onClose,
  actionLabel,
  onAction,
  hideCloseButton = false,
  className = "",
  ...props
}) => {
  useEffect(() => {
    if (!open || duration <= 0) return;

    const timeout = setTimeout(onClose, duration);
    return () => clearTimeout(timeout);
  }, [open, duration, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className={`snackbar snackbar-${variant} ${className}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      {...props}
    >
      <div className="snackbar-content">
        {title && <div className="snackbar-title">{title}</div>}
        <div className="snackbar-message">{message}</div>
      </div>
      <div className="snackbar-actions">
        {actionLabel && onAction && (
          <button
            type="button"
            className="snackbar-action"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        )}
        {!hideCloseButton && (
          <button
            type="button"
            className="snackbar-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Snackbar;
