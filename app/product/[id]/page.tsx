'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';


export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details.');
      }
    };

    fetchProduct();
  }, [params.id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="bg-gray-100 rounded-lg"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <p className="text-green-600 text-2xl font-bold mt-4">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
