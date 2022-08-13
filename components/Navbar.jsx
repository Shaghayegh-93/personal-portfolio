import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className=" fixed w-full h-20 shadow-lg z-[100]">
        <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
          <Image width="130" height="150" src="/assets/logo.png" alt="logo" />
          <div className="">
            <ul className="hidden md:flex justify-around items-center">
              <Link href="/">
                <li className="ml-10 text-sm hover:border-b">HOME</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm hover:border-b">ABOUT</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm hover:border-b">SKILLS</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm hover:border-b">PROJECT</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm hover:border-b">RESUME</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm hover:border-b">CONTACT</li>
              </Link>
            </ul>
            <div className="md:hidden">
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </>
  );
};

export default Navbar;
