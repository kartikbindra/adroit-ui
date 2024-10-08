import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../utils'
import { cva } from 'class-variance-authority'

const dropdownMenuVariants = cva('z-10 bg-white absolute flex flex-col my-2 border border-opacity-10 shadow-md rounded-sm p-1 text-neutral-11 w-max scale-0 opacity-0  transform  transition-all duration-100 ease-in', {
    variants: {
        position: {
            "top-left": 'left-0 bottom-full origin-bottom',
            "top-right": 'right-0 bottom-full origin-bottom',
            "bottom-left": ' left-0 top-full origin-top',
            "bottom-right": 'right-0 top-full origin-top',
        }
    },
    defaultVariants: {
        position: 'bottom-left'
    }
})

export const DropdownMenu = ({position, className, ...props}) => {
return (
    <div className={cn(dropdownMenuVariants({position}), className)}>
        {props.children}
    </div>
)
}

DropdownMenu.propTypes = {
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

DropdownMenu.defaultProps = {
    position: 'bottom-left',
    className: '',
}

