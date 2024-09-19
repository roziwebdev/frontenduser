"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
  UserGroupIcon,
  UserPlusIcon,
  InboxStackIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/StatsCard";


const STATS = [
  {
    icon: UserPlusIcon,
    count: "200+",
    title: "Customers",
  },
  {
    icon: UserGroupIcon,
    count: "250+",
    title: "Employees",
  },
  {
    icon: InboxStackIcon,
    count: "100+",
    title: "Products",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function Stats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Explore Our Impressive Stats
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
          We are proud of our commitment to excellence and our dedication to customer service.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Stats;