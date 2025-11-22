"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="w-full bg-[#BEE9F7] text-center py-8">

            {/* About Me - Small & Clean */}
            <p className="max-w-xl mx-auto text-[#2F5F6D] text-sm leading-relaxed mb-4">
                I bring together full-stack engineering and data analytics to deliver impactful,
                efficient, and thoughtfully designed digital products.
            </p>


            {/* Links */}
            <ul className="flex justify-center gap-6 text-[#2F5F6D] text-sm font-medium mb-4">
                <li>
                    <a href="#home" className="hover:text-[#1B4B5A] transition">Home</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-[#1B4B5A] transition">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-[#1B4B5A] transition">Skills</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-[#1B4B5A] transition">About</a>
                </li>
                <li>
                    <a href="#experience" className="hover:text-[#1B4B5A] transition">Experience</a>
                </li>

            </ul>


            {/* Icons */}
            <div className="flex justify-center gap-8 text-xl text-[#2F5F6D] mb-4">
                <a href="mailto:mithrasrikadarla@gmail.com" className="hover:text-[#1B4B5A] transition">
                    <MdEmail />
                </a>
                <a href="https://www.linkedin.com/in/mithrasri-kadarla-33026a227/" className="hover:text-[#1B4B5A] transition" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Mithrasri-Kadarla" className="hover:text-[#1B4B5A] transition" target="_blank">
                    <FaGithub />
                </a>
            </div>

            {/* Bottom */}
            <p className="text-xs text-[#4A7C89]">
                © {new Date().getFullYear()} Mithrasri Kadarla • Crafted with Calm Waves 🌊
            </p>
        </footer>
    );
}