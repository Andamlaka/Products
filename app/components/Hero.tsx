import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="text-3xl flex ">
         <div className="w-[500px]">
           <h1 className=" font-bold">Welcome to My E-Commerce Store</h1>
           <p className="mt-4 text-lg text-gray-600">
             Explore our amazing products and find your next favorite item!
           </p>
           </div>
           <div>
           <div className="mt-8">
             <Image
               src="/hero.jpg" 
               alt="E-Commerce Hero"
               width={800}
               height={400}
               className="rounded-lg shadow-lg"
             />
           </div>
         </div>
       </div>
  )
}

export default Hero