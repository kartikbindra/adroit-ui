import React from 'react'
import { AccordionItem } from '../AccordionItem/accordionItem'
import { cn } from '../utils'

export const Accordion = ({ className, children, ...props }) => {
  return (
    <div className={cn('w-full p-4 divide-y divide-neutral-5', className)} {...props}>
      {children}
    </div>
  )
}
