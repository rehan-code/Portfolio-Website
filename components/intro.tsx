"use client";

// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
//   const { ref } = useSectionInView("Home", 0.5);
//   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      // ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] pb-6 text-center sm:mb-0 scroll-mt-[100rem] mx-auto"
    >

      <TextGenerateEffect words="Hi! I'm Rehan Nagoor Mohideen" className="text-center text-[80px] md:text-5xl lg:text-8xl" duration={0.7}/>

      <motion.h1
        className="mt-12 px-4 text-2xl font-light !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
         duration: 0.5,
         delay: 0.5,
        }}
      >
        {"A passionate "} <span className="font-semibold">Software Engineer</span>
      </motion.h1>

      <motion.h1
        className="mb-10 px-4 text-2xl font-light !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
         duration: 0.5,
         delay: 0.5,
        }}
      >
        <span className="font-semibold">Excited</span> to build {" "} <span className="font-semibold">AI</span>  {" "} projects!
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            // setActiveSection("Contact");
            // setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/rehan-nagoor-mohideen-6b3156202/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/rehan-code"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}