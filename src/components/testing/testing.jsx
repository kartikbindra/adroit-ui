import React from 'react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';
import { ChevronDown } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { Settings } from 'lucide-react';
import { House } from 'lucide-react';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { DropdownMenu } from '../Menu/Menu';
import { Dropdown } from '../Dropdown/Dropdown';
import { Modal } from '../Modal/Modal';

export const testing = () => {
  return (
    // <Dropdown className='' triggerContent={<div className='flex gap-10 items-center'><ChevronDown/></div>}>
    //   <DropdownMenu position={'bottom-left'}>
    //     <DropdownItem label= {<div className='flex gap-[10px] items-center'><House/> Home</div>} href={'https://quantamind.dev'}/>
    //     <DropdownItem label={<div className='flex gap-[10px] items-center justify-between'><CircleHelp/> Contact ctrl+k</div>} />
    //     <DropdownItem label={<div className='flex gap-[10px] items-center'><Settings/> Settings</div>} />
    //   </DropdownMenu>
    // </Dropdown>
    // <Breadcrumb>
    //   <BreadcrumbItem href={'https://quantamind.dev'}>Home</BreadcrumbItem>
    //   <BreadcrumbItem href={'https://quantamind.dev'}>About</BreadcrumbItem>
    //   <BreadcrumbItem href={'https://quantamind.dev'}>Contact</BreadcrumbItem>
    // </Breadcrumb>
    <Modal/>
  )
}

