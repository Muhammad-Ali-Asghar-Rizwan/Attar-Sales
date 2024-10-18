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
        src={pic}
      
      
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
     
      
        <p className="leading-relaxed">
        Based out of Kannauj in Uttar Pradesh (India), Attar Perfume is one of the oldest attar perfume manufacturers in India. We have been the industry's pioneer and oldest company in India for more than 50 years. We started with a goal to provide the best quality natural fragrances to the world. Every fragrance we sell has undergone quality checks, is 100% authentic and premium, and has a long-lasting fragrance. We are known for our high-quality Indian attar perfumes all over the world. 
        <br />
        <br />
        Our dedication to producing high-quality fragrances with our client's needs in mind has helped us make a name for ourselves in the business on a national and international level. We manufacture, supply, and export a wide range of attar perfumes to more than 50 nations, including Saudi Arabia (Dubai, Riyadh, Daman), Australia, Germany, France, and more. This presence is proof that we are globally competitive through our expertise in manufacturing superior quality fragrances.
       </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
