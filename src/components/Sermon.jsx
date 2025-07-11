"use client";

import Image from "next/image";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { motion } from "framer-motion";

// Replace with your actual SoundCloud embed URLs
const sermons = [
  {
    title: "UNBELIEF GRIEVES THE HOLY SPIRIT",
    duration: "1:16:25",
    description:
      "Unbelief blocks the move of God. Learn how faith stirs the Holy Spirit and unlocks divine possibilities in your life.",
    soundcloudEmbed: 
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2123759322&color=%236a00a3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    
  },
  {
    title: "UNBELIEF GRIEVES THE HOLY SPIRIT",
    duration: "1:16:25",
    description:
      "Unbelief blocks the move of God. Learn how faith stirs the Holy Spirit and unlocks divine possibilities in your life.",
    soundcloudEmbed: 
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2123759322&color=%236a00a3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    
  },
  // Add more sermons as needed
];

export default function Sermons() {
  const handleShare = (sermon) => {
    const shareData = {
      title: sermon.title,
      text: `${sermon.title} by ${sermon.preacher}`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => {
        console.error("Error sharing:", error);
      });
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section id="sermon" className="py-10 px-6 max-w-7xl mx-auto scroll-mt-[65px]">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
        Recent Sermons
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Listen to our latest messages and be inspired by the Word of God.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sermons.map((sermon, index) => (
          <motion.div
          initial={{ x: -100, opacity: 20 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
            key={index}
            className="bg-[#cccccc]/50 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold text-[#6A00A3]">
                {sermon.title}
              </h3>
              <span className="text-sm text-gray-500">{sermon.duration}</span>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {sermon.description}
            </p>
           
            <div className="mb-4">
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={sermon.soundcloudEmbed}
              ></iframe>
            </div>
            <div className="flex justify-end">
              <Share2
                className="w-5 h-5 text-gray-500 cursor-pointer"
                onClick={() => handleShare(sermon)}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="https://soundcloud.com/apostle-kayode-olawoye"
          className="bg-[#6A00A3] text-white px-6 py-3 rounded-full text-sm hover:bg-[#6A00A3] transition translate-middle-x"
          target="_blank"
        >
          Browse More Sermons
        </Link>
      </div>
    </section>
  );
}
