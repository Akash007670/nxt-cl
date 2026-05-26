import React, { HTMLAttributes } from "react";
import "./Pagination.css";

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
  className = "",
  ...props
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={`pagination ${className}`} {...props}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onChange(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
