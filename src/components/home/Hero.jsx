import React from 'react'
import PropTypes from 'prop-types'

function Hero(props) {
  return (

    <div class="flex flex-wrap justify-between mt-10"> 
      <div class="flex flex-col justify-evenly flex-grow basis-full md:basis-1/2 p-4 rounded-lg mr-4 ">
        <div>

          {/* MSG: for more highlighting options https://www.coding-dude.com/wp/css/highlight-text-css/ */}
          <h1 class="font-bold text-4xl text-gray-700"> <span class="circle-sketch-highlight">M. Hammad Hassan </span> 

          </h1>
          <p class="mt-5 text-1xl text-gray-500">Full Stack Developer (Backend Heavy)</p>
          <p className='flex flex-row flex-wrap gap-2'>
            <a class="mt-5 text-1xl text-gray-500 cursor-pointer hover:text-lime-500">Linkedin </a>
            <a class="mt-5 text-1xl text-gray-500 cursor-pointer hover:text-lime-500">Github </a>
            <a class="mt-5 text-1xl text-gray-500 cursor-pointer hover:text-lime-500">Medium </a>
            <a class="mt-5 text-1xl text-gray-500 cursor-pointer hover:text-lime-500">Hashnode </a>
          </p>
        </div>
      </div>
      <div class="w-64 h-64 rounded-lg shadow ">
        <img src="https://dummyimage.com/250x250/cacaca/fff" alt="Placeholder image" class="w-64 object-cover rounded-md  hover:shadow-xl transition duration-500 "/>
      </div>
    </div>

  )
}

Hero.propTypes = {}

export default Hero
