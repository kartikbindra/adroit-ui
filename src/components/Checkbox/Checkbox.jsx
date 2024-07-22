import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"
import '../index.css';
import './checkbox.css';

const checkBoxVariants = cva("inline-flex items-center rounded-full font-medium text-neutral-12",
  {
    variants: {
      size: {
        sm: "text-xs px-[12px] py-1",
        md: "text-sm px-[12px] py-1",
        lg: "text-md px-4 py-1",
      },
    },

    defaultVariants: {
      size: "sm",
    }
  }
)

export const Checkbox = ({ variant, Disabled, size, label, className, ...props }) => {

  return (
    <div
      className={cn( checkBoxVariants({ size }), className, "checkbox-wrapper-1")} {...props}
    >
        <input 
        className={`substituted ${variant == 'primary' ? 'primary' : variant == 'warning' ? 'warning' : variant == 'error' ? 'error' : variant == 'success' ? 'success' : '' }`}
         type="checkbox" id='checkbox' disabled={Disabled}/>
        <label htmlFor='checkbox' className={`text-${size} font-medium`}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    label: PropTypes.string,
    className: PropTypes.string,
    Disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['neutral', 'primary', 'warning', 'error', 'success']),
};

Checkbox.defaultProps = {
    size: 'sm',
    label: 'Checkbox',
    Disabled: false,
    variant: 'primary',
};
