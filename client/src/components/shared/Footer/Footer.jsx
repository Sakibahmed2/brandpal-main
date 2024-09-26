import Container from "@/components/ui/Container";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FDFCFF] py-5">
      <Container>
        <div className="md:flex justify-between ">
          <div>
            <Link href="/">
              <p className="text-3xl lg:text-4xl font-semibold text-primary">
                BRAND<span className="text-secondary">PAL</span>
              </p>
            </Link>
            <p className="text-gray-400 mt-5 mb-10 md:mb-20 w-full max-w-[200px]">
              Make Strategies Marketing and make branding hype
            </p>
            <div className="hidden  md:flex gap-10 items-center text-primary">
              <p>
                <Facebook />
              </p>
              <p>
                <Twitter />
              </p>
              <p>
                <Instagram />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3">
            <div>
              <p className="text-xl text-secondary font-semibold">
                Why Marketek
              </p>
              <div className="text-gray-400 mt-5 md:mt-10 space-y-4">
                <p>
                  <Link href="/product">Our product</Link>
                </p>
                <p>
                  <Link href="/testimony">Our Testimony</Link>
                </p>
                <p>Find Marketing</p>
                <p>
                  <Link href={"/about"}>About us</Link>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xl text-secondary font-semibold">Support</p>
              <div className="text-gray-400 mt-5 md:mt-10 space-y-4">
                <p>
                  <Link href="/faq">FAQ</Link>
                </p>
                <p>Help</p>
                <p>
                  <Link href="/privacy-policy">Privacy and Policy</Link>
                </p>
                <p>
                  <Link href="/privacy-policy">Terms and condition</Link>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xl text-secondary font-semibold">Contact Us</p>
              <div className="text-gray-400 mt-5 md:mt-10 space-y-4">
                <p>support@devgenius.app</p>
                <p>+62 1234 8765 223</p>
                <p>2301 Jl. Suku saki, Cijalingan 6666</p>
              </div>
            </div>
          </div>

          <div className="flex md:hidden gap-10 items-center justify-end mt-5 text-primary">
            <p>
              <Facebook />
            </p>
            <p>
              <Twitter />
            </p>
            <p>
              <Instagram />
            </p>
          </div>
        </div>
      </Container>
      <div>
        <hr className="border-gray-400 my-5" />
        <p className="text-center text-gray-400  ">
          &copy; 2021 Brandpal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
