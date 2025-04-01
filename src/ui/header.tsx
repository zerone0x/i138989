import Link from "next/link";
import SocialIcon from "../components/SocialIcon";
import "../app/globals.css";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

function header({ setMenuOpen }: { setMenuOpen: any }) {
  return (
    <div>
      <nav className="fixed top-0 z-20 w-full bg-transparent py-5  border-b-2 backdrop-blur-lg selection:border-secondary-b backdrop-filter">
        <div className="flex md:mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between">
          <Link href="#about">
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer md:text-xl">
              trine.dev
            </p>
          </Link>
          <ul className="hidden md:flex list-none gap-4 md:gap-9">
            <li className="header">
              <Link href="#aboutMe">
                <p>About</p>
              </Link>
            </li>
            <li className="header">
              <Link href="#experience">
                <p>Experience</p>
              </Link>
            </li>
            <li className="header">
              <Link href="#project">
                <p>Project</p>
              </Link>
            </li>
            <li className="header">
              <a
                href="https://wakeupme.vercel.app/"
                title="trine.blog"
                target="_blank"
              >
                <p>Blog</p>
              </a>
            </li>
            <li className="header">
              <Link href="#contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
          <div className="md:hidden ">
            <RiMenu3Line
              size={24}
              className="text-black cursor-pointer mx-5"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
