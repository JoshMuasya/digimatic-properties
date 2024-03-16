import { DoorOpen, HandHeart, Home, SettingsIcon } from 'lucide-react'
import React from 'react'

const HomeIcons = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center py-5 px-10'>
      <div className='flex flex-row justify-around align-middle items-center w-full'>
        {/* Buy */}
        <div className='flex flex-col justify-center align-middle items-center bg-secondary rounded p-3 cursor-pointer hover:bg-ring hover:italic'>
          <div>
            <Home />
          </div>

          <h1 className='pt-2 text-base'>
            Buy
          </h1>
        </div>

        {/* Rent */}
        <div className='flex flex-col justify-center align-middle items-center bg-secondary rounded p-3 cursor-pointer hover:bg-ring hover:italic'>
          <div>
            <DoorOpen />
          </div>

          <h1 className='pt-2 text-base'>
            Rent
          </h1>
        </div>

        {/* Airbnb */}
        <div className='flex flex-col justify-center align-middle items-center bg-secondary rounded p-3 cursor-pointer hover:bg-ring hover:italic'>
          <div>
            <HandHeart />
          </div>

          <h1 className='pt-2 text-base'>
            Airbnb
          </h1>
        </div>

        {/* Services */}
        <div className='flex flex-col justify-center align-middle items-center bg-secondary rounded p-3 cursor-pointer hover:bg-ring hover:italic'>
          <div>
            <SettingsIcon />
          </div>

          <h1 className='pt-2 text-base'>
            Services
          </h1>

        </div>
      </div>
    </div>
  )
}

export default HomeIcons
