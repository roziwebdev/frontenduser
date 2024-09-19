import { useCartStore } from "@/store/cartStore";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {ShoppingCartIcon} from "@heroicons/react/24/solid";

interface CourseCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export function ProductCard({
  quantity,
  id,
  image,
  name,
  description,
  price,
}: CourseCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  
  return (
    <Card className="border rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="overflow-hidden rounded-t-lg">
        <CardHeader className="h-64 relative overflow-hidden">
          <Link href={`/shop/${id}`}>
          <Image
            width={668}
            height={668}
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform transform hover:scale-110 duration-300"
            />
            </Link>
        </CardHeader>
      </div>
      <CardBody className="p-4">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 font-bold normal-case text-gray-800">
            {name}
          </Typography>
        </a>
        {/* Limit description to 100 characters */}
        <Typography className="mb-6 font-normal text-gray-500">
          {description.length >40 ? `${description.slice(0, 40)}...` : description}
        </Typography>

          <Button
  className="flex items-center gap-2 px-4 py-2 float-end border border-gray-300 rounded-lg bg-white text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out"
  variant="outlined"
  onClick={() =>
    addToCart({ id, name, price, image, quantity })
  }
>
  <ShoppingCartIcon className="h-5 w-5" />
  <span className="text-sm">RP.{price.toFixed(2)}</span>
</Button>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
