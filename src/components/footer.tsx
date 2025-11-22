"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="w-full bg-[#BEE9F7] text-center py-10 px-4 sm:px-6">

            {/* About Text */}
            <p className="max-w-xl mx-auto text-[#2F5F6D] text-sm sm:text-base leading-relaxed mb-6">
                I bring together full-stack engineering and data analytics to deliver impactful,
                efficient, and thoughtfully designed digital products.
            </p>

            {/* Navigation Links */}
            <ul className="
                flex flex-wrap justify-center 
                gap-4 sm:gap-6 
                text-[#2F5F6D] text-sm sm:text-base font-medium 
                mb-6
            ">
                <li><a href="#home" className="hover:text-[#1B4B5A] transition">Home</a></li>
                <li><a href="#projects" className="hover:text-[#1B4B5A] transition">Projects</a></li>
                <li><a href="#skills" className="hover:text-[#1B4B5A] transition">Skills</a></li>
                <li><a href="#Aboutme" className="hover:text-[#1B4B5A] transition">About</a></li>
                <li><a href="#experience" className="hover:text-[#1B4B5A] transition">Experience</a></li>
            </ul>

            {/* Social Icons */}
            <div className="
                flex justify-center 
                gap-6 sm:gap-8 
                text-xl sm:text-2xl 
                text-[#2F5F6D] mb-6
            ">
                <a href="mailto:mithrasrikadarla@gmail.com" className="hover:text-[#1B4B5A] transition">
                    <MdEmail />
                </a>
                <a href="https://www.linkedin.com/in/mithrasri-kadarla-33026a227/"
                   target="_blank"
                   className="hover:text-[#1B4B5A] transition">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Mithrasri-Kadarla"
                   target="_blank"
                   className="hover:text-[#1B4B5A] transition">
                    <FaGithub />
                </a>
            </div>

            {/* Bottom Text */}
            <p className="text-xs sm:text-sm text-[#4A7C89]">
                © {new Date().getFullYear()} Mithrasri Kadarla • Crafted with Calm Waves 🌊
            </p>
        </footer>
    );
}
