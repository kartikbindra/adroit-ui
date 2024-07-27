import React from 'react'
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"

const fileInputVariants = cva("block w-full text-sm text-neutral-11 file:mr-4 file:rounded-sm file:border-0 file:bg-primary-9 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-10 focus:outline-none disabled:pointer-events-none disabled:opacity-60",
    {
        variants: {
            size: {
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            size: "md",
        }
    }
)

export const FileInput = ({ id, size, label, helpTextType, helpText, Required, Disabled, ...props}) => {
    return (
        <div class="mx-auto">
            <label htmlFor={id} className={`mb-1 block text-${size} font-medium text-neutral-12`}>
                {label}
                {Required && <span className="text-error-9"> *</span>}
            </label>
            <input id={id} type="file" className={cn(fileInputVariants({size}), props.className)} disabled={Disabled} />
            <p className={cn(`mt-1 text-${size} text-neutral-11`, helpTextType === 'error' ? 'text-error-9' : '')}>{helpText ? helpText : null}</p>
        </div>
    )
};

FileInput.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  helpText: PropTypes.string,
  Required: PropTypes.bool,
  helpTextType: PropTypes.oneOf(['error', 'default']),
  Disabled: PropTypes.bool,
};

FileInput.defaultProps = {
    id: 'file',
    size: 'md',
    label: 'Upload file',
    helpText: 'Upload your files here',
    Required: false,
    helpTextType: 'default',
    Disabled: false,
};


