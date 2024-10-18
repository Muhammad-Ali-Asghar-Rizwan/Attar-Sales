import Link from 'next/link'
import React from 'react'

const HeaderPage = () => {
  return (
    <div>
    <header className=" bg-amber-500 text-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-3xl  font-bold font-sans">Attar</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-10 hover:text-gray-600 hover:underline">Home</Link>
      <Link href="/About" className="mr-10 hover:text-gray-600 hover:underline">About</Link>
      <Link href="/Product" className="mr-10 hover:text-gray-600 hover:underline">Product</Link>
      <Link href="/Contact" className="mr-10 hover:text-gray-600 hover:underline">Contact</Link>
    </nav>
   
  </div>
</header>



    </div>
  )
}

export default HeaderPage
