import React from 'react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';
import { ChevronRight } from 'lucide-react';

export const testing = () => {
  return (
    <div className='rounded-full ring-2 ring-white object-cover flex -space-x-2 w-[500px]'>
      <Breadcrumb>
        <BreadcrumbItem> Home</BreadcrumbItem>
        <BreadcrumbItem >Library</BreadcrumbItem>
        <BreadcrumbItem >Components</BreadcrumbItem>
        <BreadcrumbItem >Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

