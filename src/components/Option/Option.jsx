import React from 'react'

export const Option = ({value, label, ...props}) => {
  return (
      <option value={value} {...props}>{label}</option>
    
  )
}


