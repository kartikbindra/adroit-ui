import React from "react";
import PropTypes from "prop-types";
import { cn } from "../utils";
import { cva } from "class-variance-authority";

const progressVariants = cva(
  "relative flex h-2 w-full overflow-hidden rounded-full bg-neutral-5",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-4",
      },
      variant: {
        primary: "bg-primary-9",
        neutral: "bg-neutral-12",
        success: "bg-success-9",
        warning: "bg-warning-9",
        error: "bg-error-9",
      }
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const Progress = ({ variant, className, size, label, value = 50, min = 0, max = 100, ...props }) => {
  const width = ((value - min) / (max - min)) * 100 + "%";
  return (
    <div className={"w-full"}>
        {label && ( <label className={`block text-${size} font-medium text-neutral-12 mb-1`}>{label}</label> )}
        <div className={cn(progressVariants({ size }), className)}>
        <div
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            style={{ width: width }}
            className={cn(progressVariants({ variant }), "flex h-full")}
        ></div>
        </div>
    </div>
  );
};

Progress.propTypes = {
  variant: PropTypes.oneOf(["primary", "neutral", "success", "warning", "error"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

Progress.defaultProps = {
  variant: "primary",
  size: "md",
  value: 50,
  min: 0,
  max: 100,
};
