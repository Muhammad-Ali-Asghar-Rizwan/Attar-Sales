import Image from 'next/image'
import React from 'react'
import pic from "../public/image/images.jpg"
const HomePage = () => {
  return (
    <div className='bg-black'>
      <section className="text-amber-500 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-600">
      A Range of Attar
        <br className="hidden lg:inline-block" />
      </h1>
        <h1 className='text-2xl'>Fusce at quam mauris srutru tempor kespen disse vestibulum.</h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="">
        <button className=" text-black bg-amber-600 rounded-2xl p-4  px-3 hover:relative top-2 hover:shadow-xl hover:shadow-amber-600">
        Discover Now
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-lg w-[20rem] shadow-xl shadow-amber-600"
        alt="hero"
        src={pic}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default HomePage
