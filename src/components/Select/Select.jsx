import React from 'react'
import '../index.css';
import {Option} from '../Option/Option';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"

const selectVariants = cva("py-1 block text-sm font-medium w-full rounded-sm shadow-sm border border-1 border-overlay-6 bg-neutral-1  ring-offset-background focus:border-1 focus:outline-none focus:border-primary-9 active:border-primary-9 focus:ring focus:ring-primary-6 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-3 disabled:cursor-not-allowed disabled:hover:border-overlay-6",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-[10px] py-[6px] text-md",
        lg: "px-[12px] py-2 text-lg",
      },
      variant: {
        "default": "",
        "error": "hover:border-error-9 focus:border-error-9 active:border-error-9 focus:ring focus:ring-error-6",
      }
    },

    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
)


export const Select = ({ id, variant, size, label, helptext, className, Required, Disabled, ...props}) => {
  return (
    <div className="mx-auto w-full">
        <label htmlFor={id} className={`mb-1 block text-${size} font-medium text-neutral-12`}>{label}
        {Required && <span className="text-error-9"> *</span>}
        </label>
        <select id={id} className={cn(selectVariants({size, variant}), className)} disabled={Disabled} >
            {props.children}
        </select>
        <p className={cn(`mt-1 text-${size} text-neutral-10`, variant === 'disabled' ? 'text-neutral-10' : variant === 'error' ? 'text-error-9' : '')}>{helptext}</p>
    </div>
  )
};

Select.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'error']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  helptext: PropTypes.string,
  Required: PropTypes.bool,
  Disabled: PropTypes.bool,
};

Select.defaultProps = {
  id: 'select',
  variant: 'default',
  size: 'md',
  label: 'Select a value',
  helptext: '',
  Required: false,
  Disabled: false,
};

