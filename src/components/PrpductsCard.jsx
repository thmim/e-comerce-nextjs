// import dbConnect from '@/lib/dbConnect'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ProductsCard({ product }) {
    // const productsCollection = dbConnect("products") 
    // const products = await productsCollection.find({}).toArray();
    console.log(product)
  return (
    
            <div className='border-2 border-gray-300 rounded-xl'>
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
              {/* <Link href={`/products/${product._id}`}>
              <button className="mt-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
                View Details
              </button>
              </Link> */}
              <Link href={`/products/${product._id}`} className="btn w-full rounded-xl btn-primary">
            View Details
          </Link>
            </div>
            </div>
  )
        
      
  
}

