import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"


/**
 * Primary UI component for user interaction
 */

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm gap-[10px] font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-primary-9 text-neutral-2 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-primary-10 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed",
        "solid-inverted": "bg-neutral-2 text-primary-9 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-4 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed",
        "outline": "border",
        "outline-inverted": "border",
        neutral: "bg-neutral-1 text-black",
        "neutral-inverted": "border",
      },
      size: {
        xs: "h-[32px] px-[12px] text-xs",
        sm: "h-[36px] px-[14px] text-sm",
        md: "h-[40px] px-[16px] text-sm",
        lg: "h-[44px] px-[16px] text-md",
        xl: "h-[48px] px-[20px] text-md",
        "2xl": "h-[64px] px-[28px] text-lg",
      },
      icon: {
        none: "",
        right: "flex-row",
        left: "flex-row-reverse",
        only: "flex-row",
      },
      // state:{
      //   default: "",
      //   focus: "focus:ring-2 focus:ring-primary-9 focus:ring-offset-background",
      //   hover: "hover:bg-primary-8",
      //   disabled: "disabled:bg-neutral-4 disabled:text-neutral-7",
      // }
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      icon: "none",
    }
  }
)

// const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
// <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
// </svg>


export const Button = ({ variant, size, label, icon, iconName, borderRadius, state, ...props }) => {
  return (
    <button
      type="button" 
      disabled={state === 'disabled'}
      className={cn(buttonVariants({ variant, size, icon }), `rounded-${borderRadius}`)}
      style={{cursor: state === 'disabled' ? 'not-allowed' : ''}}
      {...props}
    >
      {icon !== 'only' && label}
      {icon !== 'none' && iconName}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  icon: PropTypes.oneOf(['none', 'left', 'right', 'only']),

  setIcon: PropTypes.element,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
