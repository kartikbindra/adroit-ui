import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { cn } from "../utils";
import { cva } from "class-variance-authority";

const avatarVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-10 h-10",
      xl: "w-12 h-12",
      "2xl": "w-16 h-16",
    },
    shape:{
      circle: "rounded-full",
      square: "rounded-sm",
    }
  },
});

export const Avatar = ({ size, className, src, fallback, shape, ...props }) => {
  const [imageError, setImageError] = useState(false);
  const handleError = () => {
    setImageError(true);
  };
  return (
    <div className={cn("ring ring-2 ring-white object-cover", avatarVariants({ size, shape }), className)}>
      {(imageError || !src) ? (
        <div className={`bg-neutral-4 flex items-center text-neutral-9 text-${size} justify-center w-full h-full rounded-full overflow-hidden`}>
          {fallback ? fallback.charAt(0) : <svg class="h-1/2 w-1/2 text-secondary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"></path>
    </svg>}
        </div>) : 
      <img
        alt={fallback || "Avatar"}
        src={src}
        onError={handleError}
        className={cn("object-cover w-full h-full", avatarVariants({ shape }))}
        style={{ width: 'auto', height: 'auto' }}
        {...props}
      />}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
  className: PropTypes.string,
  src: PropTypes.string,
  shape: PropTypes.oneOf(["circle", "square"]),
};

Avatar.defaultProps = {
  size: "md",
  className: "",
  src: "",
  shape: "circle",
};
