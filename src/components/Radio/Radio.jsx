import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"
import '../index.css';
import './Radio.css';

const RadioVariants = cva("inline-flex items-center rounded-full font-medium text-neutral-12",
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

export const Radio = ({ variant, name, id, Disabled, size, label, className, ...props }) => {

  return (
    <div
      className={cn( RadioVariants({ size }), className, "radio-wrapper-1")} {...props}
    >
        <input type="radio" id={id} name={name} disabled={Disabled} className={`substituted ${variant == 'primary' ? 'primary' : variant == 'warning' ? 'warning' : variant == 'error' ? 'error' : variant == 'success' ? 'success' : '' }`}/>
        <label htmlFor={id} className={`text-${size} font-medium`}>{label}</label>
    </div>
  );
};

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    label: PropTypes.string,
    className: PropTypes.string,
    Disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'warning', 'error', 'success', 'neutral']),

};

Radio.defaultProps = {
    size: 'sm',
    label: 'Checkbox',
    Disabled: false,
    variant: 'neutral',
    id: 'Radio',
    name: 'Radio',
};
