import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <section className="relative w-11/12 mx-auto h-[80vh] flex items-center justify-center bg-gradient-to-r from-black/40 to-black/20">
      {/* Background Image */}
      <Image
        src="/banner.jpg"
        alt="Sports Banner"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Content */}
      <div className="text-center text-white px-4 md:px-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Gear Up for Victory 🏆
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore our premium collection of sports shoes, jerseys, and accessories.  
          Take your game to the next level!
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold shadow-lg transition">
            Shop Now
          </button>
          <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-xl text-lg font-semibold shadow-lg transition">
            Explore Deals
          </button>
        </div>
      </div>
    </section>
  )
}
