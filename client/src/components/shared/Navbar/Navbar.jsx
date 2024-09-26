"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { usePathname } from "next/navigation";
import cn from "@/libs/cn";
import { getUserInfo } from "@/utils/getUserInfo";
import AuthButton from "@/components/ui/AuthButton";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const cartItem = useSelector((state) => state.orders.orders);

  const userInfo = getUserInfo();
  const userRole = userInfo?.role;

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Service", path: "/service" },
    { title: "About us", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  if (userRole === "admin" || userRole === "user") {
    navItems.push({ title: "Dashboard", path: `/dashboard/${userRole}` });
  }

  if (userRole === "user") {
    navItems.push({
      title: "Cart",
      path: "/cart",
      badge: cartItem.length ? cartItem.length : "0",
    });
  }

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "px-4 mx-auto fixed top-0 left-0 right-0 z-50 bg-white transition-all ease-in-out duration-300",
        hasShadow && "shadow-md"
      )}
    >
      <Container>
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link href="/">
            <p className="text-3xl lg:text-4xl font-semibold text-primary cursor-pointer">
              BRAND<span className="text-secondary">PAL</span>
            </p>
          </Link>

          {/* Navbar for larger screens */}
          <div className="hidden lg:flex space-x-10">
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <>
                  {!item.badge && (
                    <p
                      className={cn(
                        "hover:text-orange-500 transition-all ease-in-out cursor-pointer",
                        pathname === item.path && "text-orange-500"
                      )}
                    >
                      {item.title}
                    </p>
                  )}
                  {item.badge && (
                    <div className="relative">
                      <ShoppingCart size={24} />
                      <span className="absolute -top-2 -right-2 bg-secondary text-white rounded-full w-5 h-5 flex justify-center items-center">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Sign in Button for Larger Screens */}
          <div className="hidden lg:flex gap-2">
            <AuthButton />
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden rounded-lg p-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <p className="text-center text-gray-800 hover:text-orange-500 transition-all ease-in-out cursor-pointer">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
              <div className="flex flex-col gap-3 mt-4 justify-center items-center">
                <AuthButton />
              </div>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
