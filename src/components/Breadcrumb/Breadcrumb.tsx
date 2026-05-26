import React, { AnchorHTMLAttributes, HTMLAttributes } from "react";
import "./Breadcrumb.css";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  className = "",
  ...props
}) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="breadcrumb" {...props}>
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={isLast ? "active" : ""}>
              {item.href ? (
                <a href={item.href} onClick={item.onClick}>
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLast && <span className="separator">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
