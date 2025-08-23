import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'
import { FaStar } from "react-icons/fa";
export default async function DetailsPage({params}) {
    const { id } = params;
    const productsCollection = dbConnect("products");
    const data = await productsCollection.findOne({_id: new ObjectId(id)});
    if (!data) {
    return <h2 className="text-center text-red-500">Product not found!</h2>;
  }
  return (
    

    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
        {/* Product Image Section */}
        <div className="flex justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
          <img
            src={data.img}
            alt={data.name}
            className="w-full max-w-xl h-auto object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-4">
            <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {data.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">{data.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">{data.brand}</p>
            
            {/* Rating Section */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <FaStar 
                    key={rating}
                    className={
                      data.ratings > rating ? 'text-yellow-500 text-2xl' : 'text-gray-300 text-2xl'
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ({data.ratingsCount} reviews)
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mt-4">{data.description}</p>
          </div>
          
          {/* Price and Stock Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 uppercase text-sm font-medium">Price</p>
              <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">${data.price.toFixed(2)}</p>
            </div>
            {/* <div className="text-right">
              <p className="text-gray-500 dark:text-gray-400 uppercase text-sm font-medium">Availability</p>
              <p className={`mt-1 font-bold text-lg ${data.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {data.stock > 0 ? `${stock} in stock` : 'Out of stock'}
              </p>
            </div> */}
          </div>

          <button
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
