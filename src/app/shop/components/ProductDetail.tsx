"use client"
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ProductDetailProps {
    productId: string
}

export default function ProductDetail({ productId }: ProductDetailProps) {
    const addToCart = useCartStore((state) => state.addToCart);
    const [product, setProduct] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://admindashboard-rozi.vercel.app/api/products/${productId}`)
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`)
                }
                const data = await res.json()
                setProduct(data)
            } catch (err) {
                setError(`Failed to fetch product: ${(err as Error).message}`)
            }
        }

        fetchProduct()
    }, [productId])

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            {product ? (
            <div className=" py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg  mb-4">
                                <Image className="w-full h-full object-cover" src={product.image} alt="Product Image" width={300} height={300} />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300">RP. {product.price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span className="text-gray-600 dark:text-gray-300">PO</span>
                                </div>
                            </div>
                            <div className='mb-20'>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {product.description}
                                </p>
                            </div>
                            <div className="w-1/2 px-2 bot">
                                <button onClick={() => addToCart(product)} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
