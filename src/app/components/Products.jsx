import dbConnect from '@/lib/dbConnect'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function Products() {
    const productsCollection = dbConnect("products") 
    const products = await productsCollection.find({}).toArray();
  return (
    <section className="py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">⭐ Top Rated Products</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
              <p className="text-gray-600 flex items-center mt-1">
                <span className="text-lg text-yellow-500 mr-1">⭐</span> {product.ratings}
              </p>
              <p className="text-xl font-bold text-blue-600 mt-2">Price: ${product.price}</p>
              <Link href={`/products/${product._id}`}>
              <button className="mt-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
                View Details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
