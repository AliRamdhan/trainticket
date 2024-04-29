"use client";

import React, { useState, useEffect } from "react";
import LogoLaduny from "@/public/images/logo-laduny.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.Math.round(window.scrollY));
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        // Cleanup the event listener when the component unmounts
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 ${
        scrollY >= 50
          ? "bg-gray-100 shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="flex items-center">
            <span className="sr-only">Home</span>
            <Image
              src={LogoLaduny}
              width={100}
              height={100}
              alt="Logo Laduny Store"
            />
            <p className="text-lg font-bold">TICKET ALIEF ADMIN</p>
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {/* <li>
                <Link href="/" className={`transition hover:text-gray-600`}>
                  {" "}
                  Home{" "}
                </Link>
              </li> */}
              <li>
                <Link
                  href="/ticket"
                  className={`transition hover:text-gray-600`}
                >
                  Ticket
                </Link>
              </li>

              <li>
                <Link href="/order" className={`transition hover:text-gray-600`}>
                  Order
                </Link>
              </li>
              <li>
                <Link href="/seat" className={`transition hover:text-gray-600`}>
                  Seat
                </Link>
              </li>

              <li>
                <Link
                  href="/payment"
                  className={`transition hover:text-gray-600`}
                >
                  Payment
                </Link>
              </li>

              <li>
                <Link href="/user" className={`transition hover:text-gray-600`}>
                  User
                </Link>
              </li>
              {/* <li className="px-4 py-1 border broder-white rounded">
                <Link
                  href="/laduny-auth/signin"
                  className={`transition hover:text-gray-600`}
                >
                  {" "}
                  Login
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

// NAMA
// NO WA
// Merek laptop
// Keluhan
// Appointment
