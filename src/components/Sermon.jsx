"use client";

import Link from "next/link";
import { Share2 } from "lucide-react";
import { motion } from "framer-motion";


const sermons = [
  {
    title: "UNBELIEF GRIEVES THE HOLY SPIRIT",
    duration: "1:16:25",
    description:
      "Unbelief blocks the move of God. Learn how faith stirs the Holy Spirit and unlocks divine possibilities in your life.",
    type: "spotify",
    embedUrl:
      "https://open.spotify.com/embed/episode/0yTavCB4p4EWA8UKoJPk7P?utm_source=generator",
  },
   {
    title: "THE SPIRIT UPON",
    duration: "2:05:54",
    description:
    "The Spirit comes upon a believer for power, boldness, and divine assignment. Be stirred to walk in this dimension of the anointing.",
    type: "spotify",
    embedUrl:
      "https://open.spotify.com/embed/episode/5pakJ0i4lKIrE3ZZjMNB0e?utm_source=generator",
  },
  {
    title: "PRAYERLESSNESS GRIEVES THE HOLY SPIRIT",
    duration: "1:53:18",
    description:
    "Prayerlessness weakens your spirit and grieves the Holy Spirit. This message calls you back to deep, consistent fellowship through prayer.",
    type: "spotify",
    embedUrl:
      "https://open.spotify.com/embed/episode/2sJjfmGhFEhy71Loxnn2eM?utm_source=generator",
  },
  {
    title: "LACK OF REVERENCE TO GOD GRIEVES THE HOLY SPIRIT",
    duration: "2:56:22",
    description:
     "When we lose reverence for God, we dishonor His presence. This message urges believers to return to holy fear and honor of the Spirit.",
    type: "spotify",
    embedUrl:
      "https://open.spotify.com/embed/episode/0V2iOyTlGc8TgRIOdu0eXI?utm_source=generator",
  },
  
];

export default function Sermons() {
  const handleShare = (sermon) => {
    const shareData = {
      title: sermon.title,
      text: `${sermon.title} by Apostle Kayode Olawoye`,
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
    <section
      id="sermon"
      className="py-10 px-6 max-w-7xl mx-auto scroll-mt-[65px]"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
        Recent Sermons
      </h2>
      <p className="text-center text-lg text-[#8f8f8f] mb-6 max-w-lg mx-auto leading-relaxed">
        Listen to our latest messages and be inspired by the Word of God.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sermons.map((sermon, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
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
              {sermon.type === "spotify" ? (
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={sermon.embedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              ) : (
                <iframe
                  width="100%"
                  height="120"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={sermon.embedUrl}
                ></iframe>
              )}
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
          href="https://open.spotify.com/show/5AqVYxvSTPavrcCHqecmwk"
          className="bg-[#6A00A3] text-white px-6 py-3 rounded-full text-sm hover:bg-[#6A00A3] transition translate-middle-x"
          target="_blank"
        >
          Browse More Sermons
        </Link>
      </div>
    </section>
  );
}
