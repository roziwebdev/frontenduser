"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/CategoryCard";
import Image from "next/image";


const CATEGORIES = [
  {
    img: "/image/categories/artpaper.webp",
    icon: HeartIcon,
    title: "Art Paper",
    desc: "Matt paper, also known as matte paper, is a type of paper that has a smooth, non-shiny (matt) surface.",
  },
  {
    img: "/image/categories/doubleside.webp",
    icon: PuzzlePieceIcon,
    title: "Double-Sided Paper",
    desc: "This paper is specially designed so that it can be used to print photos on both sides (front and back).",
  },
  {
    img: "/image/categories/ivory.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Ivory Paper",
    desc: "Ivory paper has a smooth and shiny surface, but only on one side.",
  },
  {
    img: "/image/categories/duplex.jpg",
    icon: MicrophoneIcon,
    title: "Duplex Paper",
    desc: "Duplex paper is a type of cardboard that has two different sides, one side is white and the other side is gray",
  },
];

export function Category() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Products Categories
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
        Choice of categories with various types of paper so as not to limit customers in choosing needs that suit their products
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <Image
            width={768}
            height={768}
            src="/image/categories/glossy.webp"
            alt="category image"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-9" color="white">
              Premium Glossy Paper
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Glossy Photo Paper, also known as High Glossy, is a type of paper that produces shiny printing results
            </Typography>

          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;