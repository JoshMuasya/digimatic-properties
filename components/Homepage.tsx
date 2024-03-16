import React from 'react'
import Animation from './Animation'
import HomeIcons from './HomeIcons'
import Rent from './Rent'
import Buy from './Buy'
import Airbnb from './Airbnb'
import Services from './Services'

const Homepage = () => {
    return (
        <div className='pt-10'>
            {/* Animation */}
            <div id="animation">
                <Animation />
            </div>

            {/* Icons */}
            <div id="icons">
                <HomeIcons />
            </div>

            {/* Rent */}
            <div id="rent">
                <Rent />
            </div>

            {/* Buy */}
            <div id="buy">
                <Buy />
            </div>

            {/* Airbnb */}
            <div id="airbnb">
                <Airbnb />
            </div>

            {/* Services */}
            <div id="services">
                <Services />
            </div>
        </div>
  )
}

export default Homepage
