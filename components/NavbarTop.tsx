import React from 'react'
import { ThemeToggle } from './ThemeToggler'
import Link from 'next/link'

const NavbarTop = () => {
    return (
        <div className='flex justify-center items-center align-middle'>
            <div className='italic text-sm flex flex-row justify-between w-1/3 items-center align-middle'>
                {/* Left */}
                <div>
                    <Link
                        href=''
                        className='hover:font-bold hover:text-primary'
                    >
                        Post on Digimatic Properties?
                    </Link>
                </div>

                {/* Right */}
                <div>
                    <Link
                    href=''
                    className='hover:font-bold hover:text-primary'
                    >
                        Find a Home?
                    </Link>
                </div>
            </div>

            <div className='fixed top-2 right-3'>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default NavbarTop
