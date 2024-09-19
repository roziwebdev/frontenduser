"use client";
import React from "react";
import FeedbackCard from "@/components/FeedbackCard";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "The products produced are good, and delivery accuracy is guaranteed, and one of the best choices for food packaging.",
    client: "PT Indolakto",
    title: "Purchasing Indolakto",
    img: "/image/customers/indolakto.jpg",
  },
  {
    feedback:
      "Providing good service, so that if there is a problem with the product sent it will be handled quickly, thank you for your cooperation",
    client: "Mayora Group",
    title: "QC Mayora Group",
    img: "/image/customers/mayora.jpg",
  },
  {
    feedback:
      "I have been a customer for 10 years, the packaging is always strong and not easily damaged, PT Arjaya continues to be successful.",
    client: "Maspion",
    title: "Marketing Maspion.",
    img: "/image/customers/pondan.jpeg",
  },
];

export function Feedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Our Customers Are Saying
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            What Our Customers Say
            Our mission is to provide service and comfort to our customers by providing good quality products so as to provide customer satisfaction
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default Feedback;
