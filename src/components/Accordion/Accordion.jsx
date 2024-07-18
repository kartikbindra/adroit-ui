import React from 'react'
import { cn } from '../utils'
import PropTypes from 'prop-types'

export const Accordion = ({ className, children, ...props }) => {
  return (
    <div className={cn('w-full p-4 divide-y divide-neutral-5', className)} {...props}>
      {children}
    </div>
  )
};

