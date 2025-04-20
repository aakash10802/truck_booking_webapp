import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  const headerMenu = [
    {
      id: 1,
      name: 'Ride',
      icon: '/truck.png',
    },
    {
      id: 2,
      name: 'Package',
      icon: '/box.png',
    },
    {
      id: 3,
      name: 'Driver',
      icon: '/driver.png',
    },
  ]

  return (
    <div className='p-1 pb-1 pl-10 border-b-[2px] border-gray-200 flex items-center justify-between'>
      <div className='flex gap-20 items-start'>
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <div className='flex gap-6 items-center'>
        {headerMenu.map((item) => (
          <div key={item.id} className='flex gap-2 items-center'>
            <Image src={item.icon} alt={item.name} width={20} height={20} />
            <h2 className="text-[16px] font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
      <div className='p-5'>
      <UserButton />
      </div>
      
    </div>
  )
}

export default Header
