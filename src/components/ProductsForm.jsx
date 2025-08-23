"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function ProductsForm() {
  
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      category: form.category.value.trim(),
      name: form.name.value.trim(),
      brand: form.brand.value.trim(),
      price: form.price.value,      
      stock: form.stock.value,      
      img: form.img.value.trim(),
      quantity: form.quantity.value || "0",
      description: form.description.value.trim(),
      ratings: 0,        
      ratingsCount: 0,  
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || "Failed to add product");
      }

      
      form.reset();
      
      toast.success("Product added successfully!");
      router.push("/");
    } catch (err) {
      console.error(err);
      
      toast.error(err.message)
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-3xl text-center font-bold mb-4">Add New Product</h2>

      <input
        type="text"
        name="category"
        placeholder="Category"
        className="input input-bordered w-full"
        required
      />

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        className="input input-bordered w-full"
        required
      />

      <input
        type="text"
        name="brand"
        placeholder="Brand"
        className="input input-bordered w-full"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        className="input input-bordered w-full"
        required
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        className="input input-bordered w-full"
        required
      />

      <input
        type="text"
        name="img"
        placeholder="Image URL"
        className="input input-bordered w-full"
        required
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        className="input input-bordered w-full"
      />

      <textarea
        name="description"
        placeholder="Product Description"
        className="textarea textarea-bordered w-full"
        rows={4}
      />

      <input
        className="btn btn-primary btn-block"
        type="submit"
        value="Add Product"
      />
    </form>
  )
}
