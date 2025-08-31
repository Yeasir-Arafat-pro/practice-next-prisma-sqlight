import { handleAddUser } from '@/app/prisma-db'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function AddUserPage() {


  async function createUser(formData: FormData){
      'use server'
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const user = await handleAddUser(name, email)
    
    redirect('/users')
  }

  return (
    <form className='flex flex-col gap-4 m-8 text-white' action={createUser}>
      <input className='border p-2' type="text" name='name' />
      <input className='border p-2' type="text" name='email' />
      <button className='bg-blue-500 text-white p-2'>Submit</button>
    </form>
  )
}
