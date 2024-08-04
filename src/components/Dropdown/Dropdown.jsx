import React from 'react'
import { cn } from '../utils'
import PropTypes from 'prop-types'
import { ChevronDown } from 'lucide-react'


export const Dropdown = ({ triggerContent, ...props}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.closest('.dropdown')){
        return;
      }
      setIsOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className={cn('relative dropdown', props.className)}>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm gap-[10px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-neutral-1 text-neutral-12 focus:ring-2 focus:ring-overlay-4 focus:ring-offset-background hover:bg-neutral-4 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed h-[36px] px-[14px]" onClick={toggleDropdown}>{triggerContent}</button>
      {isOpen && props.children}
    </div>
    
  )
};


Dropdown.propTypes = {
  triggerContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Dropdown.defaultProps = {
  triggerContent: <ChevronDown/>,
  className: '',
}

