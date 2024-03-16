'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Heart, MapPin } from 'lucide-react'

const Rent = () => {
  return (
    <div className='py-10'>
      <div className='flex flex-col justify-center align-middle items-center px-7 w-full'>
        {/* Top */}
        <div className='flex flex-row justify-between w-full'>
          {/* Title */}
          <Link
            href=''
            className='text-3xl font-bold hover:text-primary'
          >
            Rent
          </Link>

          {/* Link */}
          <div>
            <Link
              href=''
              className='text-xl hover:text-primary'
            >
              View More
            </Link>

            <div className='border-b-4 pt-5' />
          </div>
        </div>

        {/* Card */}
        <div>
          <Card className="w-[350px] h-fit transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-ring">
            <CardContent>
              <div className='flex flex-col justify-center align-middle items-center w-full p-5 cursor-pointer'>
                {/* Image */}
                <div
                  className='flex relative aspect-square items-center justify-center w-full'
                  style={{ position: 'relative' }}
                >
                  <Image
                    src='/airbnb.jpg'
                    fill={true}
                    alt='Airbnb'
                    className='rounded-2xl'
                  />

                  {/* Add to Wishlist */}
                  <Link
                    className='fixed top-3 right-3 hover:text-primary'
                    style={{ position: 'absolute' }}
                    href=''
                  >
                    <Heart />
                  </Link>
                </div>

                {/* Details */}
                <div className='pt-5 hover:text-primary w-full'>
                  {/* Title */}
                  <h1 className='font-bold text-lg'>
                    One Bedroom
                  </h1>

                  {/* Amount */}
                  <div className='font-semibold text-base'>
                    KSH 15,000
                  </div>

                  {/* Listed By */}
                  <div className='text-sm'>
                    Listed By: Digimatic Properties
                  </div>

                  {/* Location And Available */}
                  <div className='flex flex-row justify-between align-middle items-center w-full text-sm'>
                    {/* Available */}
                    <div>
                      Available: 5
                    </div>

                    {/* Location */}
                    <div className='flex flex-row justify-center align-middle items-center'>
                      {/* Icon */}
                      <div>
                        <MapPin className='w-4 h-4' />
                      </div>

                      {/* Place */}
                      <div>
                        Westlands
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Rent
