import React from 'react'
import { cn } from '../utils'
import PropTypes from 'prop-types'

export const DropdownItem = ({label, href, className, ...props}) => {
  return (
    <a href={href || '#'} className={cn('font-medium text-sm py-2 px-3 hover:bg-neutral-3 hover:text-neutral-12 rounded-sm my-0 w-full', className)} {...props}>
      {label}
    </a>
  )
}

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
}

DropdownItem.defaultProps = {
    label: 'Dropdown Item',
    href: '#',
}

