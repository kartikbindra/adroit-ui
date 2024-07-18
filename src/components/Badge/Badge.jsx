import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"
import '../index.css';

const badgeVariants = cva("inline-flex items-center rounded-full bg-primary-9 px-3 py-1 text-xs font-semibold text-primary-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      type: {
        "primary": "bg-primary-9 text-primary-1",
        "secondary": "bg-primary-4 text-primary-9",
        "outline": "bg-neutral-1 text-primary-9 border border-primary-9",
        "success": "bg-success-4 text-success-9",
        "warning": "bg-warning-4 text-warning-11",
        "error": "bg-error-4 text-error-9",
      },
      size: {
        xs: "text-xs px-[12px] py-1",
        sm: "text-sm px-[12px] py-1",
        md: "text-md px-4 py-1",
      },
    },

    defaultVariants: {
      type: "primary",
      size: "xs",
    }
  }
)

export const Badge = ({ type, size, content, className, ...props }) => {
  return (
    <div
      className={cn( badgeVariants({ type, size }), className, )} {...props}
    >
        {content}
    </div>
  );
};

Badge.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'success', 'warning', 'error']),
    size: PropTypes.oneOf(['xs', 'sm', 'md']),
    content: PropTypes.string,
};

Badge.defaultProps = {
    type: 'primary',
    size: 'xs',
    content: 'Badge',
};
