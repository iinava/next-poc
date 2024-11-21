"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import RegisterDialog from "./RegisterDialog";
import logo from "../../public/assets/logos/Nexcent_logo.png"
export default function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Community", href: "#community" },
    { name: "Blog", href: "#blog" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 px-4 sm:px-[3vw] md:py-[11.14px] md:px-[100.23px] z-50 w-full bg-[#FFFFFF] backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 sm:h-14 items-center">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Nexcent Logo"
              width={107.54}
              height={16.71}
              className="w-[350px]   sm:w-[107.54px]"
            />
          </Link>

          <div className="flex justify-end items-center gap-[22.27px] w-[650.48px]">
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Register Now Button (Desktop) */}
            <div className="hidden md:block registerbutton">
              <RegisterDialog/>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <div
                className="md:hidden h-12 w-12 cursor-pointer pt-1 "
              >
                <Menu className="border-none outline-none" />
                <span className="sr-only">Toggle navigation menu</span>
              </div>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
              <div className="grid gap-6 pt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="registerbutton"><RegisterDialog/></div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
