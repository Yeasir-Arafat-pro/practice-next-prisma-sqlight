import { User } from '@/types/userType'
import React from 'react'

export default async function page() {
  const res = await fetch('http://localhost:3000/api/users')
  const data = await res.json()
  console.log(data);

  return (
    <div className='flex flex-col gap-4 p-4'>
      {data.payload.map((user: User) => (
        <div className='border p-4 rounded' key={user.email}>
          <h2 className='text-xl font-bold'>{user.name}</h2>
          <p className='text-gray-600'>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
