import React from "react";
import { cn } from "../utils";
import PropTypes from 'prop-types';
import { BreadcrumbItem } from "../BreadcrumbItem/BreadcrumbItem";

export const Breadcrumb = ({ className, seperator, ...props }) => {
  const items = React.Children.toArray(props.children);
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        "inline-flex items-center space-x-2 py-2 text-sm font-medium text-neutral-11 px-4 rounded",
        className
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === items.length - 1 ? (
            <span className="text-neutral-12">{item}</span>
          ) : (
            item
          )}
          {index < items.length - 1 && (
            <span className="text-neutral-8">{seperator}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

Breadcrumb.propTypes = {
  seperator: PropTypes.string,
};

Breadcrumb.defaultProps = {
  seperator: "/",
};
