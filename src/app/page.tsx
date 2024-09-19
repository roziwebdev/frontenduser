"use client";
import Hero from "./ui/Hero";
import { Stats } from "./ui/Stats";
import Category from "./ui/Category";
import Products from "./ui/Product";
import Feedback from "./ui/Feedback";
import Customers from "./ui/Customers";
import Footer from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      {/* <Navbar openDrawer={openDrawer} />
      <Sidebar isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} /> */}
      <Hero />
      <Stats />
      <Category />
      <Products />
      <Feedback />
      <Customers />
      <Footer/>
    </>
  );
}
