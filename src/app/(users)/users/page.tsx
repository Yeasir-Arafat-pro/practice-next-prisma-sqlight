import { _GetData } from '@/app/prisma-db'
import { User } from '@/types/userType'
import React from 'react'

export default async function page() {
  const res = await _GetData('user')

  return (
    <div className='flex flex-col gap-4 p-4'>
      {res.map((user: User) => (
        <div className='border p-4 rounded' key={user.email}>
          <h2 className='text-xl font-bold'>{user.name}</h2>
          <p className='text-gray-600'>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
