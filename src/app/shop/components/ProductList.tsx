// components/ProductList.tsx
"use client";

import { Typography, Button, Input, IconButton, TypographyProps } from "@material-tailwind/react";
import ProductCard from "@/components/ProductCard";
import { useCallback, useEffect, useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(5); // To control number of products per page
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch products with search and pagination
  const fetchProducts = useCallback(async (page: number, limit: number, search: string) => {
    try {
      const res = await fetch(`https://admindashboard-rozi.vercel.app/api/products?page=${page}&limit=${limit}&search=${search}`);
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch products on load and when page/limit/searchTerm changes
  useEffect(() => {
    fetchProducts(currentPage, limit, searchTerm);
  }, [currentPage, limit, searchTerm, fetchProducts]);

  // Pagination functions
  const next = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getItemProps = (index: number) => ({
    variant: currentPage === index ? "filled" : "text",
    color: "gray",
    onClick: () => setCurrentPage(index),
  });

  // Create pagination range
  const createPaginationRange = () => {
    const range: number[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, currentPage + Math.floor(maxPagesToShow / 2));

      if (startPage > 1) {
        range.push(1);
        if (startPage > 2) range.push(0); // Adding ellipsis
      }

      for (let i = startPage; i <= endPage; i++) {
        range.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) range.push(0); // Adding ellipsis
        range.push(totalPages);
      }
    }
    return range;
  };

  const paginationRange = createPaginationRange();

  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <Typography variant="h3" className="text-center mb-6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
          Product List
        </Typography>
        <Input
          size="md"
          icon={<MagnifyingGlassIcon />}
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full   mx-auto  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
              <div className="loading loading-spinner loading-lg text-primary"></div>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              quantity={0}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))
        )}
      </div>
      <div className="mt-8 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={prev}
            disabled={currentPage === 1}
            placeholder={undefined}
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {paginationRange.map((page, index) =>
              page === 0 ? (
                <span key={index} className="text-gray-500">...</span>
              ) : (
                <IconButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} key={page} >
                  {page}
                </IconButton>
              )
            )}
          </div>
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={next}
            disabled={currentPage === totalPages}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
