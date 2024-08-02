import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from "../utils";
import { cva } from "class-variance-authority";

const sliderVariants = cva("relative top-0 range w-full h-2 rounded-lg bg-neutral-5 appearance-none cursor-pointer range-track accent-primary-9", {
  variants: {
    size: {
      sm: "h-1 text-sm",
      md: "h-2 text-md",
      lg: "h-4 text-lg",
    },
    variant: {
      primary: "accent-primary-9",
      neutral: "accent-neutral-12",
      success: "accent-success-9",
      warning: "accent-warning-9",
      error: "accent-error-9",
    }
  },
  defaultVariants: {
    size: "md",
  },
});

export const Slider = ({ size, label, helpText, valueLabel, Disabled, variant, min = 0, max = 100, step = 1, defaultValue = 50, onChange, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="w-[800px]">
      <div className='flex justify-between items-center'>
        <div className={`text-${size} font-medium text-neutral-12 mb-1`}>{label}</div>
        {valueLabel && <div className={`text-${size} text-neutral-11 mb-1`}>{value}</div>}
      </div>
      <div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={cn(`relative top-0 range w-full h-2 rounded-lg bg-neutral-5 appearance-none cursor-pointer range-track accent-primary-9 slider-thumb`, sliderVariants({size, variant}), Disabled && "cursor-not-allowed bg-neutral-8")}
          style={{
            background: Disabled === true ? `linear-gradient(to right, #858585 0%, #858585 ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)` : variant === "primary"
              ? `linear-gradient(to right, #0091ff 0%, #0091ff ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`
              : variant === "neutral"
              ? `linear-gradient(to right, #202020 0%, #202020 ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`
              : variant === "success"
              ? `linear-gradient(to right, #30a46c 0%, #30a46c ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`
              : variant === "warning"
              ? `linear-gradient(to right, #F7CE00 0%, #F7CE00 ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`
              : variant === "error"
              ? `linear-gradient(to right, #e5484d 0%, #e5484d ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`
              : `linear-gradient(to right, #0091ff 0%, #0091ff ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`,
          }}
          disabled={Disabled}
        />
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: ${size === "sm" ? "1rem" : size === "md" ? "1.25rem" : size === "lg" ? "1.5rem" : "1rem"};
              height: ${size === "sm" ? "1rem" : size === "md" ? "1.25rem" : size === "lg" ? "1.5rem" : "1rem"};
              background: #fff;
              border-radius: 50%;
              cursor: pointer;
              box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
              border: ${Disabled === true ? "4px solid #858585" : variant === "primary"
                ? "4px solid #0091ff"
                : variant === "neutral"
                ? "4px solid #202020"
                : variant === "success"
                ? "4px solid #30a46c"
                : variant === "warning"
                ? "4px solid #F7CE00"
                : variant === "error"
                ? "4px solid #e5484d"
                : "4px solid #0091ff"};
            }
            input[type="range"]::-moz-range-thumb {
              -moz-appearance: none;
              appearance: none;
              width: ${size === "sm" ? "1rem" : size === "md" ? "1.25rem" : size === "lg" ? "1.5rem" : "1rem"};
              height: ${size === "sm" ? "1rem" : size === "md" ? "1.25rem" : size === "lg" ? "1.5rem" : "1rem"};
              background: #fff;
              border-radius: 50%;
              cursor: pointer;
              box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
              border: ${variant === "primary"
                ? "4px solid #0091ff"
                : variant === "neutral"
                ? "4px solid #202020"
                : variant === "success"
                ? "4px solid #30a46c"
                : variant === "warning"
                ? "4px solid #F7CE00"
                : variant === "error"
                ? "4px solid #e5484d"
                : "4px solid #0091ff"};
            }
          `}
        </style>
      </div>

      <div className={`text-${size} text-neutral-11 mt-1`}>{helpText}</div>
    </div>
  );
};

Slider.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
  helpText: PropTypes.string,
  valueLabel: PropTypes.bool,
  Disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "neutral", "success", "warning", "error"]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  size: "lg",
  variant: "primary",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 50,
  label: "Label",
  helpText: "Help text",
  valueLabel: true,
};
