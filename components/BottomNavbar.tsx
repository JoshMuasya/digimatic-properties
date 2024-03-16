import { BookmarkIcon, HomeIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 bg-background p-5 z-20 flex flex-row justify-around items-center align-middle w-full">
      {/* Home */}
      <Link
        href=''
        className='flex flex-col justify-center align-middle items-center hover:text-primary hover:italic'
      >
        <HomeIcon
          className='w-7 h-7'
        />
        <h3 className='font-bold text-base'>
          Home
        </h3>
      </Link>

      {/* Browse */}
      <Link
        href=''
        className='flex flex-col justify-center align-middle items-center hover:text-primary hover:italic'
      >
        <MagnifyingGlassIcon
          className='w-7 h-7'
        />
        <h3 className='font-bold text-base'>
          Browse
        </h3>
      </Link>

      {/* Saved */}
      <Link
        href=''
        className='flex flex-col justify-center align-middle items-center hover:text-primary hover:italic'
      >
        <BookmarkIcon
          className='w-7 h-7'
        />
        <h3 className='font-bold text-base'>
          Saved
        </h3>
      </Link>

      {/* Profile */}
      <Link
        href=''
        className='flex flex-col justify-center align-middle items-center hover:text-primary hover:italic'
      >
        <PersonIcon
          className='w-7 h-7'
        />
        <h3 className='font-bold text-base'>
          Profile
        </h3>
      </Link>
    </div>
  )
}

export default BottomNavbar
