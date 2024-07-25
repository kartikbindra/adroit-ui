import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"
import '../index.css';

const textareaVariants = cva("",
  {
    variants: {
      state: {
        "default": "",
        "disabled": "text-neutral-9",
        "error": "hover:border-error-9 focus:border-error-9 active:border-error-9 focus:ring focus:ring-error-6",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-[10px] py-[6px] text-md",
        lg: "px-[12px] py-2 text-lg",
      },
    },
  }
)

export const Textarea = ({ id, required, size, label, helpText, placeholder, state, className, ...props }) => {
return (
    <div className={"my-4 mx-auto w-full"}>
        <label className={cn("mb-1 block text-sm font-medium", state === 'disabled' ? "text-neutral-9" : "text-neutral-12", textareaVariants({ state }), required ? "after:ml-0.5 after:text-error-9 after:content-['*']" : '', size === 'md' ? "text-md" : size === 'lg' ? "text-lg" : "")} htmlFor={id} >{label}</label>
        <textarea id={id} rows='5' className={cn("px-2 py-1 block text-sm font-medium w-full rounded-xs border border-2 border-overlay-6 bg-neutral-1 hover:border-primary-9 ring-offset-background focus:border focus:outline-none focus:border-primary-9 active:border-primary-9 focus:ring focus:ring-primary-6 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-3 disabled:cursor-not-allowed disabled:hover:border-overlay-6", textareaVariants({ size, state }) )} placeholder={placeholder} disabled={state === 'disabled'} {...props}/>
        <p className={cn("mt-1 text-sm text-neutral-9", state === 'error' ? "text-error-9" : '', size === 'md' ? "text-md" : size === 'lg' ? "text-lg" : "")}>{helpText}</p>
    </div>
);
};

Textarea.propTypes = {
    required: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  helpText: PropTypes.string,
  state: PropTypes.oneOf(['default', 'disabled', 'error']),
    className: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
    id: 'textarea',
  size: 'md',
  label: '',
  helpText: '',
  state: 'default',
  required: false,
  placeholder: 'your text goes here',

};
