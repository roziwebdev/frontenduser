"use client";
import Link from "next/link"; 
import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/hero.jpg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[600px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              The Future In Packaging
            </Typography>
            <Typography variant="lead" className="mb-10 !text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            We are certified with ISO 9001:2015
            </Typography>
            <Typography variant="lead" className="mb-10 !text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            To deliver high values in printing and packaging, Arjaya has deployed a number of modern technologies, ranging from printing machines to coatings and die cut.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Link href={"/shop"}>
                <Button color="indigo" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>view all products</Button>
              </Link>
            </div>

          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
