import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';
import { cva } from "class-variance-authority"
import '../index.css';
import { AlertCircleIcon, InfoIcon, Check, CircleX } from 'lucide-react';

const alertVariants = cva("",
  {
    variants: {
      type: {
        "info": "bg-primary-4 text-primary-10",
        "success": "bg-success-4 text-success-10",
        "warning": "bg-warning-4 text-warning-11",
        "error": "bg-error-4 text-error-10",
      },
    },
    defaultVariants: {
      type: "info",
    }
  }
)

export const Alert = ({ type, title, description, className, ...props }) => {
  return (
    <div
      className={cn(alertVariants({ type }), className, "flex items-center gap-[16px] py-4 px-4 w-full rounded-sm")} {...props}
    >
            <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full">
            {type === 'info' && <InfoIcon/>}
            {type === 'success' && <Check/>}
            {type === 'warning' && <AlertCircleIcon/>}
            {type === 'error' && <CircleX/>}
            </div>
            <div>
            <div className="text-md font-semibold">{title}</div>
            <div className="text-xs font-regular">{description}</div>
            </div>
    </div>
  );
};

Alert.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: PropTypes.string,
    description: PropTypes.string,
};

Alert.defaultProps = {
    type: 'info',
    title: 'Alert-Title',
    description: 'Alert-Description',
};
