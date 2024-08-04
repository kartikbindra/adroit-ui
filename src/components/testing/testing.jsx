import React from 'react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';
import { ChevronDown } from 'lucide-react';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { DropdownMenu } from '../Menu/Menu';
import { Dropdown } from '../Dropdown/Dropdown';

export const testing = () => {
  return (
    <Dropdown className=''>
      <DropdownMenu position={'bottom-left'}>
        <DropdownItem label='Item 1' href={'https://quantamind.dev'}/>
        <DropdownItem label='Item 2' />
        <DropdownItem label='Item 3' />
      </DropdownMenu>
    </Dropdown>
  )
}

