import React from "react";
import PropTypes from "prop-types";
import { cn } from "../utils";
import { cva } from "class-variance-authority";
import viteImg from "../../../public/vite.svg";

const avatarVariants = cva("object-cover", {
  variants: {
    size: {
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-10 h-10",
      xl: "w-12 h-12",
      "2xl": "w-16 h-16",
    },
  },
});

export const Avatar = ({ size, className, src, alt, ...props }) => {
  const imgClasses = cn(avatarVariants({ size }), "rounded-full ring-2 ring-white object-cover", className);

  return (
    <img
      alt={alt || "Avatar"}
      src={src || viteImg}
      className={imgClasses}
      style={{ width: 'auto', height: 'auto' }}
      {...props}
    />
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  size: "md",
  className: "",
  src: "",
  alt: "Avatar",
};
