import React from 'react'
import { Avatar } from '../Avatar/Avatar'

export const testing = () => {
  return (
    <div className='rounded-full ring-2 ring-white object-cover flex -space-x-2'>
      <Avatar size="xl" src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />
      <Avatar size="xl" fallback={'Ab'}/>
      <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />
    </div>
  )
}

