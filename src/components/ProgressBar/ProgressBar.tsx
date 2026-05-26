import React, { HTMLAttributes } from "react";
import "./ProgressBar.css";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: "primary" | "success" | "warning" | "danger";
  showValue?: boolean;
  label?: string;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  variant = "primary",
  showValue = false,
  label,
  animated = true,
  className = "",
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const labelText = label ? label : `${Math.round(percentage)}%`;

  return (
    <div className={`progress ${className}`} {...props}>
      {label && (
        <div className="progress-meta">
          <span className="progress-title">{label}</span>
          {showValue && (
            <span className="progress-value">{Math.round(percentage)}%</span>
          )}
        </div>
      )}

      <div
        className={`progress-track progress-${variant} ${
          animated ? "animated" : ""
        }`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={Math.round(percentage)}
        aria-label={labelText}
      >
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>

      {!label && showValue && (
        <span className="progress-label">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

export default ProgressBar;
