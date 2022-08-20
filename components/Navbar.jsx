import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className=" fixed w-full h-[80px] shadow-lg z-10">
        <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
          <Image width="100" height="60" src="/assets/logo.png" alt="logo" />
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
            <div onClick={navHandler} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav ? "fixed top-0 left-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            className={
              nav
                ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
                : "fixed top-0 left-[-110%]  bg-[#ecf0f3] h-screen p-5 ease-in duration-500"
            }
          >
            <div className="flex items-center justify-between w-full">
              <div>
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width="80"
                  height="80"
                />
              </div>
              <div
                onClick={navHandler}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
            <div
              className="py-4 flex flex-col
            "
            >
              <ul className="">
                <Link href="/">
                  <li className="py-4 text-sm">HOME</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">ABOUT</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">SKILLS</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">PROJECT</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">RESUME</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">CONTACT</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="tracking-widest text-primary-600">
                  Let's Connect
                </p>
                <ul className="flex justify-between items-center w-full my-4 sm:w-[80%]">
                  <Link href="/">
                    <li className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonPlusFill />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
