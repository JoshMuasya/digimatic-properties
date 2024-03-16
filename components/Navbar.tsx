"use client"

import React, { useState } from 'react'
import NavbarTop from './NavbarTop'

import Image from 'next/image'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full p-5 z-20 bg-background">
      {/* Top */}
      <NavbarTop />

      {/* Border */}
      <div className='w-full border-solid border-secondary border-b-2 pt-2' />

      {/* Bottom */}
      <div className='py-5 flex flex-row justify-between align-middle items-center w-full'>
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>

        {/* Menu */}
        <div className='block lg:hidden'>
          {isOpen ? (
            <Cross1Icon
              onClick={() => setIsOpen(!isOpen)}
              className="h-6 w-6 cursor-pointer"
            />
          ) : (
            <HamburgerMenuIcon
              onClick={() => setIsOpen(!isOpen)}
              className="h-6 w-6 cursor-pointer"
            />
          )}

          {/* Drawer Menu for small screens */}
          {isOpen && (
            <div className="flex flex-col justify-around align-middle items-center lg:hidden bg-secondary h-screen fixed top-36 right-0 bottom-0 w-3/5 rounded-s-md">
              <Link
                href=''
                className='hover:italic hover:text-primary'
              >
                Browse
              </Link>

              <Link
                href=''
                className='hover:italic hover:text-primary'
              >
                Buy a Home
              </Link>
              <Link
                href=''
                className='hover:italic hover:text-primary'
              >
                Rent a Home
              </Link>
              <Link
                href=''
                className='hover:italic hover:text-primary'
              >
                Airbnb
              </Link>
              <Link
                href=''
                className='hover:italic hover:text-primary'
              >
                Services
              </Link>
            </div>
          )}
        </div>

        {/* Links for large screens */}
        <div className="hidden lg:flex font-semibold text-base flex-row justify-around align-middle items-center w-2/3">
          <Link
            href=''
            className='hover:italic hover:text-primary'
          >
            Browse
          </Link>

          <Link
            href=''
            className='hover:italic hover:text-primary'
          >
            Buy a Home
          </Link>
          <Link
            href=''
            className='hover:italic hover:text-primary'
          >
            Rent a Home
          </Link>
          <Link
            href=''
            className='hover:italic hover:text-primary'
          >
            Airbnb
          </Link>
          <Link
            href=''
            className='hover:italic hover:text-primary'
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
