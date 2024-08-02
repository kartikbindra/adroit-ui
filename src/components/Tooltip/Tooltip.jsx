// Tooltip.jsx
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from "../utils";
import { cva } from "class-variance-authority";

export const Tooltip = ({ content, position, delay, ...props}) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, delay);
};
  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false)
};

  const tooltipPosition = cva(
    "absolute z-10 px-4 py-2 text-sm text-neutral-1 bg-neutral-12 border border-neutral-11 border-opacity-50 rounded-sm shadow-md transition-opacity duration-300 ease-out",
    {
        variants: {
            position: {
                top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-nowrap",
                bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2 text-nowrap",
                left: "right-full top-1/2 transform -translate-y-1/2 mr-2 text-nowrap",
                right: "left-full top-1/2 transform -translate-y-1/2 ml-2 text-nowrap",
            }
        },
        defaultVariants: {
            position: "top",
        },
    }
  );

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="cursor-pointer"
      >
        {props.children}
      </div>
        <div className={cn(tooltipPosition({ position }), visible ? 'opacity-100' : 'opacity-0')}>
          {content}
        </div>
      
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    delay: PropTypes.number,
};

Tooltip.defaultProps = {
  position: 'top',
  content: "Thank you for using AdroitUI! have a nice day",
  delay: 300,
};


