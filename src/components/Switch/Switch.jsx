import React from 'react'
import PropTypes from "prop-types";
import { cn } from "../utils";
import { cva } from "class-variance-authority";

const switchVariants = cva("h-6 w-11 rounded-full bg-neutral-5 after:absolute after:h-5 after:w-5 after:rounded-full after:bg-neutral-1 after:shadow after:transition-all after:content-[''] hover:bg-neutral-6 peer-checked:bg-primary-9 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-primary-7 peer-disabled:cursor-not-allowed peer-disabled:bg-neutral-6 peer-disabled:after:bg-neutral-4", {
    variants: {
        size: {
        sm: "h-5 w-9 after:h-4 after:w-4 after:top-0.5 after:left-0.5",
        md: "h-6 w-11 after:w-5 after:h-5 after:top-0.5 after:left-0.5",
        lg: "h-8 w-14 after:w-6 after:h-6 after:top-1 after:left-1",
        },
    },
    });

export const Switch = ({ size, className, label, labelText, id, ...props }) => {
  return (
    
    <label htmlFor={id} className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" id={id} className="peer sr-only" {...props}/>
        <div className={cn(switchVariants({ size }), className)}></div>
        {label && <label htmlFor={id} className={`ml-4 text-${size} font-medium text-neutral-12`}>{labelText}</label>}
    </label>
    
  )
};

Switch.propTypes = {
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    className: PropTypes.string,
    label: PropTypes.bool,
    labelText: PropTypes.string,
    id: PropTypes.string,
};

Switch.defaultProps = {
    size: "md",
    className: "",
    label: false,
    id: "switch1",
};

