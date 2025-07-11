"use client"; // if you're using Next.js App Router

import React from "react";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <section id="donate" className="w-full scroll-mt-[65px] mx-auto py-10 px-10 bg-[#8f8f8f]/20">
      <h3 className="text-2xl md:text-3xl text-center text-gray-900 font-bold mb-4">
        Partner with Us
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 items-center min-h-[28rem]">
        {/* Background Image Section */}
        <div className="h-full rounded-lg shadow-lg bg-[url('/images/background/give.jpg')] bg-cover bg-center p-8 flex flex-col justify-end">
          {/* Animate from top */}

          <motion.h2
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl text-white font-bold drop-shadow-lg"
          >
            Your Giving is Making Eternal Impact
          </motion.h2>
          <motion.p 
          initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          className="text-lg text-white drop-shadow-md">
            We believe in the transforming power of generosity! Every seed you
            sow helps us reach more souls, raise kingdom leaders, and fulfill
            divine purpose across generations.
          </motion.p>
        </div>

        {/* Account Info Section */}
        <div className="bg-[#6A00A3]/20 p-6 rounded-lg shadow-md h-full flex flex-col">
          <h4 className="md:text-3xl text-2xl  py-2 px-2 bg-white rounded-full h-15 font-bold text-center text-[#6A00A3] mb-4">
            Account Details
          </h4>

          <div className="flex flex-col items-center pt-5">
            <img
              src="/images/logos/FCMB_Logo.png"
              alt="FCMB Logo"
              className="w-32 h-32 mb-4 object-contain"
            />

            {/* Animate from left */}
            <motion.p
              initial={{ x: -100, opacity: 20 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-white bg-gradient-to-r from-[#8f8f8f] to-[#6A00A3] w-3/4 py-4 px-2
               font-extrabold text-center rounded-full shadow-lg md:text-xl text-lg mb-4"
            >
              Account Number:
              <span className="block font-extrabold text-xl md:text-2xl">5015202019</span>
            </motion.p>

            {/* Animate from right */}
            <motion.p
              initial={{ x: 100, opacity: 20 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-white bg-gradient-to-r from-[#6A00A3] to-[#8f8f8f] w-3/4 py-4 px-2 
              font-extrabold text-center rounded-full shadow-lg md:text-xl text-lg"
            >
              Account Name:
              <span className="block font-extrabold text-xl md:text-2xl">
                Kayode Olawoye Ministry
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
