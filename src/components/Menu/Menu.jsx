import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../utils'
import { cva } from 'class-variance-authority'

const dropdownMenuVariants = cva('z-10 absolute flex flex-col my-2 border border-opacity-10 shadow-md rounded-sm p-1 text-neutral-11 w-48', {
    variants: {
        position: {
            "top-left": 'left-0 bottom-full',
            "top-right": 'right-0 bottom-full',
            "bottom-left": 'left-0 top-full',
            "bottom-right": 'right-0 top-full',
        }
    },
    defaultVariants: {
        position: 'bottom-left'
    }
})

export const DropdownMenu = ({position, ...props}) => {
return (
    <div className={cn(dropdownMenuVariants({position}), props.className)}>
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

