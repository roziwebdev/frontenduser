"use client";

import { Typography } from "@material-tailwind/react";
import ProductCard from "@/components/ProductCard";
import { useCallback, useEffect, useState } from "react";



export function Products() {

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(6); // To control number of products per page
  
  // Function to fetch products with search and pagination
  const fetchProducts = useCallback(async (limit: number, ) => {
    try {
      const res = await fetch(`https://admindashboard-rozi.vercel.app/api/products?limit=${limit}`);
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch products on load and when page/limit/searchTerm changes
  useEffect(() => {
    fetchProducts( limit, );
  }, [ limit, fetchProducts]);




  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Explore Products
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Explore our range of digital printing products We offer high-quality, vibrant prints that bring your packaging designs to life, perfect for branding and presentation.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {products.map((product) => (
          <ProductCard
                quantity={0}
                id={product.id}
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
