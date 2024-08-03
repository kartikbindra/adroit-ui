import React from 'react'
import PropTypes from 'prop-types';

export const BreadcrumbItem = ({href, className , ...props}) => {
return (
    <a href={href} className={`font-medium text-sm ${className} cursor-pointer hover:bg-neutral-2 hover:rounded px-2 py-1 hover:underline`} {...props}>
        {props.children}
    </a>
);
};

BreadcrumbItem.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
    href: "#",
    className: "",
};
