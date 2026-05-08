import React, { useState } from "react";
import { Star } from "react-feather";
import "./Rating.css";

export interface RatingProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "children" | "onChange"
  > {
  maxStars?: number;
  value?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
}

const Rating: React.FC<RatingProps> = ({
  maxStars = 5,
  value = 0,
  onChange,
  readonly = false,
  size = "md",
  interactive = true,
  className = "",
  ...props
}) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const displayRating = hoverRating || value;

  const handleClick = (rating: number) => {
    if (!readonly && interactive && onChange) {
      onChange(rating);
    }
  };

  return (
    <div
      className={`rating rating-${size} ${className} ${
        readonly ? "rating-readonly" : ""
      }`}
      {...props}
    >
      {Array.from({ length: maxStars }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= displayRating;

        return (
          <button
            key={index}
            className={`rating-star ${isFilled ? "filled" : "empty"}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => !readonly && setHoverRating(starValue)}
            onMouseLeave={() => !readonly && setHoverRating(0)}
            disabled={readonly}
            type="button"
          >
            <Star fill={isFilled ? "currentColor" : "none"} />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
