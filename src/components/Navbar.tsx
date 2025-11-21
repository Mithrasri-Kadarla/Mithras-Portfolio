"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#91C8E4]/80 backdrop-blur-md shadow-sm z-50">
      {/* Increased navbar height → change py-4 to py-6 (or py-8 for even taller) */}
      <div className="w-full flex justify-between items-center px-8 py-6">
        <Link href="/" className="text-2xl font-bold text-[#4682A9]">
          Mithra<span className="text-[#749BC2]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-base font-medium text-[#4682A9]">
          <Link href="#Aboutme" className="hover:text-[#749BC2] transition">About</Link>
          <Link href="#skills" className="hover:text-[#749BC2] transition">Skills</Link>
          <Link href="#projects" className="hover:text-[#749BC2] transition">Projects</Link>
          <Link href="#contact" className="hover:text-[#749BC2] transition">Contact</Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-[#4682A9]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#91C8E4] shadow-md flex flex-col items-center gap-4 py-4 text-[#4682A9] font-medium">
          <Link href="#Aboutme" onClick={() => setOpen(false)}>About</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
