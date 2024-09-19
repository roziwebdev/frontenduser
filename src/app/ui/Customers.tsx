"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const COMPANIES = [
  "indolakto.jpg",
  "maspion.png",
  "mayora.jpg",
  "nabati.jpg",
  "pia.jpeg",
  "pondan.jpeg",
];

function Customers() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            AWESOME COMMUNITY
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Trusted by over 200+ Companies
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map((logo, key) => (
            <Image
              width={768}
              height={768}
              key={key}
              src={`/image/customers/${logo}`}
              alt={logo}
              className="w-40  opacity-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;
