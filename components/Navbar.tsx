"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const routeToOther = (routes: string) => {
    if (routes === "/") {
      router.push("/");
    } else if (routes === "signin") {
      router.push("/user/" + routes);
    } else {
      router.push(routes);
    }
  };

  return (
    <>
      <header className="w-full absolute z-10 bg-slate-100 border-b-1 border-slate-300">
        <nav
          className="max-w-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4"
        >
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="car hub logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>

          <CustomButton
            title="Home"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white ml-[37%]"
            handleClick={() => routeToOther("/")}
          />

          <CustomButton
            title="About"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white"
            handleClick={() => routeToOther("about")}
          />

          <CustomButton
            title="Contact"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white"
            handleClick={() => routeToOther("contact")}
          />

          <CustomButton
            title="Wishlist"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white"
            handleClick={() => router.push("/wishlist")}
          />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
