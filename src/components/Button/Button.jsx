import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm gap-[10px] font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        "solid-primary": "bg-primary-9 text-neutral-2 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-primary-10 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed",
        "solid-secondary": "bg-neutral-2 text-primary-9 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-4 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed",
        "solid-destructive": "bg-error-9 text-error-1 focus:ring-overlay-6 focus:ring-offset-background hover:bg-error-10 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed",
        "outline-primary": "border-2 border-primary-9 bg-none text-primary-9 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-primary-3 disabled:bg-neutral-1 disabled:text-neutral-7 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:border-neutral-7",
        "outline-neutral": "border-2 border-neutral-12 bg-none text-neutral-12 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-3 disabled:bg-neutral-1 disabled:text-neutral-7 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:border-neutral-7",
        "outline-destructive": "bg-error-1 text-error-9 border-2 border-error-9 focus:ring-overlay-6 focus:ring-offset-background hover:bg-error-3 disabled:bg-neutral-1 disabled:text-neutral-7 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:border-neutral-7",
        "neutral-primary": "bg-neutral-12 text-neutral-2 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-11 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed",
        "neutral-secondary": "bg-neutral-2 text-neutral-12 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-4 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed",
      },
      size: {
        xs: "h-[32px] px-[12px] text-xs",
        sm: "h-[36px] px-[14px] text-sm",
        md: "h-[40px] px-[16px] text-sm",
        lg: "h-[44px] px-[16px] text-md",
        xl: "h-[48px] px-[20px] text-md",
        "2xl": "h-[64px] px-[28px] text-lg",
      },
      radius: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    }
  }
)

export const Button = ({ variant, size, label, radius, state, className, ...props }) => {
  return (
    <button
      type="button" 
      disabled={state === 'disabled'}
      className={cn(buttonVariants({ variant, size, radius }), className)}
      style={{cursor: state === 'disabled' ? 'not-allowed' : ''}}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['solid-primary', 'solid-secondary', 'solid-destructive', 'outline-primary', 'outline-neutral', 'outline-destructive', 'neutral-primary', 'neutral-secondary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  radius: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']),
  state: PropTypes.oneOf(['default', 'disabled']),
};

Button.defaultProps = {
  variant: 'solid-primary',
  size: 'md',
  label: 'Button',
  radius: 'xs',
  onClick: () => {
    alert('Hello from adroitUI!');
  },
  state: 'default',

};
