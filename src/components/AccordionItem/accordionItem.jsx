import React, { useState } from "react";
import { cn } from "../utils";
import PropTypes from "prop-types";

export const AccordionItem = ({ title, description, className, ...props }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={cn("py-[24px] px-[16px]", className)} {...props}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full font-semibold"
      >
        <span className={`${accordionOpen && "text-primary-9"}`}>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-neutral-12 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180 fill-primary-9"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180  fill-primary-9"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-neutral-11 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`font-medium text-neutral-11 overflow-hidden text-left ${accordionOpen && "pt-[16px]"}`}>{description}</div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

AccordionItem.defaultProps = {
  title: "Accordion Item Title",
  description: "Accordion Item Description",
};
