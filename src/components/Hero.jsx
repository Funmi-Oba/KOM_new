"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});
export default function Hero() {
  return (
    <section className="relative min-h-screen text-gray-900 ">
      <Image
        src="/images/background/hall.jpg"
        alt="Kayode Olawoye Ministries"
        fill
        className="absolute inset-0 object-cover z-0 w-full h-full "
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div
        className="relative z-20 min-h-screen flex flex-col md:flex-row items-center justify-between 
      overflow-hidden px-6 pt-28 md:pt-0 pb-35 md:pb-0"
      >
        <div className="absolute top-10 right-0 z-[10] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block rotate-12"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A00A3 " stopOpacity="0" />
                <stop offset="1" stopColor="#6A00A3 " />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8F8F8F " stopOpacity="0" />
                <stop offset="1" stopColor="#8F8F8F " />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A00A3 " stopOpacity="0" />
                <stop offset="1" stopColor="#6A00A3 " />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8F8F8F " stopOpacity="0" />
                <stop offset="1" stopColor="#8F8F8F " />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A00A3 " />
                <stop offset="1" stopColor="#6A00A3 " stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 z-[10] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block rotate"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A00A3 " stopOpacity="0" />
                <stop offset="1" stopColor="#6A00A3 " />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8F8F8F " stopOpacity="0" />
                <stop offset="1" stopColor="#8F8F8F " />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A00A3 " stopOpacity="0" />
                <stop offset="1" stopColor="#6A00A3 " />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8F8F8F " stopOpacity="0" />
                <stop offset="1" stopColor="#8F8F8F " />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A00A3 " />
                <stop offset="1" stopColor="#6A00A3 " stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* ✨ Sprinkled Star SVGs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top Left */}
          <svg
            className="animate-ping absolute top-20 left-6 w-10 h-10 text-[#6A00A3]/50"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ animationDelay: "2s" }}
          >
            <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
          </svg>
          {/* Top right */}
          <svg
            className="animate-ping absolute top-1/2 right-6 w-10 h-10 text-[#6A00A3] "
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ animationDelay: "2s" }}
          >
            <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
          </svg>

          {/* Bottom Right */}
          <svg
            className="animate-ping absolute bottom-6 right-6 w-3 h-3 text-[#6A00A3]"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ animationDelay: "2s" }}
          >
            <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
          </svg>

          {/* Center-Right */}
          <svg
            className="animate-ping absolute top-30 right-15 w-5 h-5 text-[#6A00A3]"
            fill="currentColor"
            style={{ animationDelay: "1s" }}
            viewBox="0 0 20 20"
          >
            <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
          </svg>

          {/* Bottom Left */}
          <svg
            className="animate-ping absolute bottom-20 left-10 w-5 h-5 text-[#6A00A3]"
            fill="currentColor"
            style={{ animationDelay: "4s" }}
            viewBox="0 0 20 20"
          >
            <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
          </svg>

          {/* Center Top */}
          <svg
            className="animate-ping absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 text-[#6A00A3]"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ animationDelay: "1.5s" }}
          >
            <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
          </svg>
        </div>

        <div className=" relative max-w-3xl z-30 text-center  p-6 md:p-10 ">
          {/* ✅ Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`${greatVibes.className} tracking-wide  drop-shadow-md animate-fade-in text-5xl 
              md:text-7xl font-extrabold text-[#ffffff]`}
            >
              Welcome to
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-bold mt-1 text-[#ffffff] ">
              Kayode Olawoye Ministries
            </h2>
          </motion.div>
         <motion.p
      className="mt-6 text-lg md:text-xl text-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
            A non-denominational Christian ministry focused on teaching and
            training believers in the five-fold ministries.
          </motion.p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/#sermon"
              className="bg-[#6A00A3] text-white px-6 py-3 rounded-full text-sm md:text-base 
              hover:bg-[#ffffff] hover:text-[#6A00A3] transition border border-white hover:border-[#6A00A3]"
            >
              Listen to Sermons
            </Link>
            <Link
              href="/donate"
              className="border bg-white hover:border-[#ffffff] text-[#6A00A3] px-6 py-3 rounded-full text-sm 
              md:text-base hover:bg-[#6A00A3] border-[#6A00A3] hover:text-white transition"
            >
              Partner with Us
            </Link>
          </div>
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 flex flex-col justify-center items-center px-4 md:px-0">
          <div className="relative w-90 h-90  md:w-96 md:h-96">
            {/* Enhanced professional background with multiple layers */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#6A00A3]/20 via-purple-400/15 to-[#6A00A3]/20 rounded-full animate-pulse"></div>
            <div
              className="absolute -inset-6 bg-gradient-to-l from-[#6A00A3]/15 via-transparent to-purple-300/20 rounded-full animate-spin-slow"
              style={{ animation: "spin 20s linear infinite" }}
            ></div>
            <div
              className="absolute -inset-4 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <img
              src="/images/background/KOM1.png"
              alt="Apostle Kayode Olawoye"
              className="relative w-full h-full object-contain rounded-full border-4 border-white shadow-2xl 
              ring-4 ring-[#6A00A3]/20"
            />
            {/* Floating elements around the image */}
            <div
              className="absolute -top-4 -right-4 w-10 h-10 bg-[#6A00A3]/20 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-400/30 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute top-1/4 -left-8 w-6 h-6 bg-[#6A00A3]/25 rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          <p className="text-center text-lg text-[#ffffff] mt-8 block md:hidden">
            Apostle Kayode Olawoye
          </p>
        </div>
      </div>
    </section>
  );
}
