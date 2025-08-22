
import ProductsCard from '@/components/PrpductsCard';
import dbConnect from '@/lib/dbConnect';
import React from 'react'

export default async function Products() {
    const productsCollection = dbConnect("products") 
    const products = await productsCollection.find({}).toArray();
    
  return (
    <section className="py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">⭐ All Products</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

