"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full max-w-full overflow-x-hidden bg-[#91C8E4]/80 backdrop-blur-md shadow-sm z-50">
      
      {/* Navbar Main Row */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 w-full max-w-full overflow-hidden">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-[#4682A9] whitespace-nowrap"
        >
          Mithra<span className="text-[#749BC2]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-semibold text-[#2F5F6D]">
  <Link
    href="#Aboutme"
    className="relative group transition cursor-pointer"
  >
    About
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2F5F6D] group-hover:w-full transition-all duration-300"></span>
  </Link>

  <Link
    href="#skills"
    className="relative group transition cursor-pointer"
  >
    Skills
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2F5F6D] group-hover:w-full transition-all duration-300"></span>
  </Link>

  <Link
    href="#projects"
    className="relative group transition cursor-pointer"
  >
    Projects
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2F5F6D] group-hover:w-full transition-all duration-300"></span>
  </Link>

  <Link
    href="#contact"
    className="relative group transition cursor-pointer"
  >
    Contact
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2F5F6D] group-hover:w-full transition-all duration-300"></span>
  </Link>
</div>


        {/* Mobile Menu Icon */}
        <button className="md:hidden text-[#4682A9]" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden w-full bg-[#91C8E4] shadow-md flex flex-col items-center gap-4 py-4 text-[#4682A9] font-medium overflow-hidden">
          <Link href="#Aboutme" onClick={() => setOpen(false)}>About</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
