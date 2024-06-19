'use client';

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ButtonOne } from '../Buttons'

const Header = () => {
    const [isSticky, setSticky] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 400);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      useEffect(() => {
        const handleScroll = () => {
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop && lastScrollTop > 100) {
            // downscroll
            setSticky(false);
          } else {
            // upscroll
            setSticky(true);
          }
          setLastScrollTop(st <= 0 ? 0 : st);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [lastScrollTop]);

  return (
    <>

        <nav className={`w-full z-10 backdrop-blur-lg transition-transform duration-500 ease-in-out  ${
          isSticky
            ? 'sticky top-10 translate-y-0 transform '
            : ' -translate-y-full transform '
        }`}>
            <div className="container relative">
                <div className="flex items-center py-4 px-7 bg-[#1d1e22] rounded-xl text-white w-full">
                    <h1 className="font-semibold text-xl w-4/5 lg:w-1/4">
                        <Link className="" href="#"> 
                            Udeh Praise C.
                        </Link>
                    </h1>
                    <ul className="w-full navbar-nav flex justify-end items-center gap-10 whitespace-nowrap">
                        <li className="text-center py-2">
                            <Link className="py-4 font-bold nav-btn" href="#overview">Overview</Link>
                        </li>
                        <li className=" text-center py-2">
                            <Link className="py-4 font-bold" href="#services">Services</Link>
                        </li>
                        <li className="text-center py-2">
                            <Link className="py-4 font-bold" href="#about">About</Link>
                        </li>
                        <li className="text-center py-2">
                            <Link className="py-4 font-bold" href="#skills">Skills</Link>
                        </li>
                        <li className="text-center py-2 ">
                            <Link className="py-4 font-bold" href="#projects">Projects</Link>
                        </li>
                        <li className="text-center ">
                            <ButtonOne/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
