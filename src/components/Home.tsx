"use client";

import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Home() {
    return (
        <section className="relative w-screen -ml-[calc((100vw-100%)/2)] mt-0 pt-[80px] flex flex-col justify-start items-center text-center h-[80vh] overflow-hidden bg-gradient-to-b from-[#5AA9E6] via-[#91C8E4] to-[#749BC2]">

            {/* ☁️ Top Cloud */}
            <svg
                className="absolute top-12 left-10 w-[280px] opacity-80 animate-cloud-top"
                viewBox="0 0 64 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="cloudGradientTop" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#f1f5f9" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#cloudGradientTop)"
                    d="M20 15a5 5 0 0 1 5-5h1a6 6 0 0 1 11-2 7 7 0 1 1 1 14H20a5 5 0 1 1 0-10z"
                />
            </svg>

            {/* ☁️ Bottom Cloud */}
            <svg
                className="absolute bottom-12 right-10 w-[320px] opacity-70 animate-cloud-bottom"
                viewBox="0 0 64 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="cloudGradientBottom" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#f1f5f9" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#cloudGradientBottom)"
                    d="M20 15a5 5 0 0 1 5-5h1a6 6 0 0 1 11-2 7 7 0 1 1 1 14H20a5 5 0 1 1 0-10z"
                />
            </svg>

            {/* 🌊 Blurred Background Light */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[800px] bg-[#FFFACD]/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>

            {/* 🧑‍💻 Text Content */}
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#0a1a2f] mb-4 relative z-10">
                Hi, I'm <span className="text-[#4682A9] italic">Mithra!</span>
            </h1>

            <p className="text-lg md:text-xl text-[#36454F] max-w-2xl mb-10 leading-relaxed relative z-10">
                A Passionate Developer Blending Web Creativity, Data Insights, and Machine Learning to Craft
                Meaningful Digital Experiences.
            </p>

            {/* 💻 Coding Profiles */}
            <div className="flex justify-center gap-6 mb-8 relative z-10 text-3xl">
                <a
                    href="https://github.com/Mithrasri-Kadarla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 text-[#171515] hover:text-[#4682A9] transition-all duration-300"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.hackerrank.com/profile/mithrasrikadarla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 text-[#2EC866] hover:text-[#4682A9] transition-all duration-300"
                >
                    <FaHackerrank />
                </a>

                <a
                    href="https://www.codechef.com/users/mithrasri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 text-[#5B4638] hover:text-[#4682A9] transition-all duration-300"
                >
                    <SiCodechef />
                </a>

                <a
                    href="https://leetcode.com/u/mithrasri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 text-[#FFA116] hover:text-[#4682A9] transition-all duration-300"
                >
                    <SiLeetcode />
                </a>

                <a
                    href="https://www.geeksforgeeks.org/user/mithrasridm42/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 text-[#2F8D46] hover:text-[#4682A9] transition-all duration-300"
                >
                    <SiGeeksforgeeks />
                </a>
            </div>

            {/* 📄 Resume Button */}
            <a
                href="https://drive.google.com/file/d/1Zoyp9zBFcfCMPk_N_rpnV0mSkF6v0bAO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#4682A9] text-[#FFFBDE] font-semibold rounded-full shadow-md hover:bg-[#749BC2] hover:shadow-lg transition-all duration-300 relative z-10"
            >
                View Resume
            </a>
        </section>
    );
}
