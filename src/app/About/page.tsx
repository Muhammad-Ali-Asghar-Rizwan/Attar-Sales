import Image from "next/image";
import React from "react";
import pic from "../public/image/images (3).jpg";
const About = () => {
  return (
    <div>
      <section className=" bg-amber-400 text-black body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        alt="ecommerce"
         className=" lg:w-96 w-full  lg:h-auto h-64 object-cover object-center rounded-lg"
        src={pic}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
     
      
        <p className="leading-relaxed text-3xl font-bold mb-4">"Treasure of Fragrances!</p>

 <p>Explore our website for the finest attar from around the world, crafted to enrich your life with exquisite scents. Our collection features:</p>
<br />
<p> - Pure and natural attar</p>
 
 <p> - Unique and exclusive fragrances </p>
<p> - High-quality and long-lasting scents </p>
<p> - Affordable and competitive prices </p>
<br />
<p>Order your favorite attar online and we'll deliver it right to your doorstep."</p>


       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
