"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  XMarkIcon,
  Bars3Icon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
    href: "/",
  },
  {
    name: "Shop",
    icon: ShoppingBagIcon,
    href: "/shop",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={href || "#"} > {/* Menggunakan Link */}
        <Typography
          as="span" // Mengganti "a" dengan "span" karena Link sudah menangani navigasi
          variant="paragraph"
          color="gray"
          className="flex items-center gap-2 font-medium text-gray-900"
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

interface NavbarProps {
  openDrawer: () => void; // Menambahkan props untuk membuka drawer
}

export function Navbar({ openDrawer }: NavbarProps) {
  const { items } = useCartStore();
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="flex items-center justify-between">
            <Image
              src={"/image/logos/logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
            <IconButton variant="text" onClick={openDrawer}>
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {items.length}
              </span>
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
