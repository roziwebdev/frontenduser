"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

import React from 'react'

export default function Clientside() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <>
      <Navbar openDrawer={openDrawer} />
      <Sidebar isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </>
  )
}
