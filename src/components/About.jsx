"use client";

import { Eye, Target, Scroll, BookOpenText, Video } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion"; // Import motion for animations

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState(null); // State to track which item is expanded
  const aboutData = [
    {
      icon: <Eye className="w-8 h-8 " />,
      title: "Our Vision",
      description:
        "To be an apostolic ministry that equips leaders in Bible-believing churches with the strategies and support they need to fulfill their ministry effectively, helping them walk in clarity, accuracy, and power, following the order of Kenneth Hagin Ministries.",
    },

    {
      icon: <Target className="w-6 h-6 text-[#6A00A3 ]" />,
      title: " Our Mission",
      description:
        "To unite pastors from every denomination in ministering to the Lord and receiving divine empowerment, so they can all fulfill their unique assignments on the earth.",
    },

    {
      icon: <Scroll className="w-6 h-6 text-[#6A00A3 ]" />,
      title: "The Mandate",
      description:
        "“You are not called as a denominational pastor planting churches. You are sent to the Body of Christ. You are to minister to the whole Church of God after the order of Kenneth Hagin.” (Received April 26, 2013)",
    },

    {
      icon: <BookOpenText className="w-6 h-6 text-[#6A00A3 ]" />,
      title: "The Story Behind The Vision",
      description:
        "At 18, I was called into ministry with a divine instruction to follow a servant of God, my biological mother. I obeyed, not as her child, but under God's authority. For 29 years, from August 1996 until her passing on May 7, 2025, I served under her leadership in a small local church. In those hidden years, the Lord birthed a vision in me, a call to minister to the Body of Christ beyond denominational lines.",
    },
  ];

  const toggleReadMore = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // toggle off if already expanded
    } else {
      setExpandedIndex(index); // expand the clicked item
    }
  };

  return (
    <section id="about" className="bg-[#8f8f8f]/20 px-6 py-4 scroll-mt-[65px]">
      <div className="max-w-7xl  mx-auto">
        <h3 className="text-2xl md:text-3xl text-gray-900 font-bold text-center mt-10 mb-2">
          About Our Ministry
        </h3>
        <p className="text-center text-xl text-[#8f8f8f] mb-6">
          Learn more about our ministry, our vision, and how we're working to
          spread God's word.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-10">
          {/* <VideoPlayer
          src="/videos/intro.mp4"
          poster="images/thumbnails/intro.jpg" // Optional poster image for the video
          >

          </VideoPlayer> */}
          {/* Left: Image */}
          <motion.div className="w-full md:w-1/3 flex justify-center items-center">
            <div
              className="w-full max-w-sm md:max-w-full h-full bg-gradient-to-tr
             from-white via-[white]/50 to-[#6A00A3]/80 rounded-lg overflow-hidden shadow-lg relative"
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }} // Initial position above the viewport
                whileInView={{ y: 0, opacity: 1 }} // Animate from top
                transition={{ duration: 1.5, ease: "easeOut" }} // Transition effect
                viewport={{ once: false }}
                src="/images/about/couple.png"
                alt="Apostle Kayode Olawoye"
                className="w-full h-full object-cover rounded-lg  border-4 border-white/40 shadow-2xl 
                ring-4 ring-[#6A00A3]/20"
              />
              <p
                className="absolute bottom-15 left-1/2 transform -translate-x-1/2 
                 bg-white/70 text-[#6A00A3] text-sm md:text-lg font-semibold px-4 py-2 
                 w-full text-center"
              >
                Apostle Kayode and Pst (Mrs) Shola Olawoye
              </p>
            </div>
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6 p-2 sm:px-4">
            {aboutData.map((about, index) => {
              const isExpanded = expandedIndex === index; // Check if the current item is expanded
              const shortText = about.description.slice(0, 150); // Shortened text for the initial view
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 min-h-[20rem]  transition-transform hover:scale-105 "
                >
                  <div className="mb-4 p-3 text-[#6A00A3] rounded-lg bg-[#6A00A3]/10 inline-block animate-bounce">
                    {about.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{about.title}</h4>
                  <p className="text-[#6b5a62] text-justify">
                    {isExpanded ? about.description : `${shortText}...`}
                  </p>
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="mt-4 cursor-pointer text-sm text-[#6A00A3] font-semibold underline hover:text-purple-900 transition"
                  >
                    {!isExpanded ? "Read More" : "Read Less"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-3/4 h-full mx-auto mb-10 mt-10">
          <h3 className="bg-white w-3/4 mx-auto md:h-15 h-20 rounded-xl shadow-lg px-6 py-4 shadow-[#6A00A3] 
          text-xl md:text-2xl font-bold text-[#6A00A3] text-center mb-2">
            Why You Should Join Our Ministry
          </h3>
          <p className="mt-10 text-center text-sm md:text-base text-gray-700 mb-4 max-w-3xl mx-auto">
            At Kayode Olawoye Ministries, you're not just becoming a part of a
            ministry, you’re stepping into divine alignment.
          </p>
          <p className="text-center text-sm md:text-base text-gray-700 mb-6 max-w-3xl mx-auto">
            Whether you're a pastor seeking clarity, a worker hungry for deeper
            spiritual training, or a believer ready to serve beyond
            denominational lines, this is your home, a place of purpose, power,
            and prophetic guidance.
          </p>

          <h5 className="text-lg md:text-xl font-bold text-[#6A00A3] text-center mb-2">
            Watch This Video to Know More About Us
          </h5>
          <div className="text-center text-4xl mb-6 animate-bounce">👇</div>

          {/* Ministry Video Section */}

          <div className="bg-[#6A00A3]/10 border-2 border-[#6A00A3] rounded-xl shadow-lg p-4">
            <div className="rounded-lg overflow-hidden  border border-[#8F8F8F]">
              <iframe
                src="https://www.youtube.com/embed/mtDMvNZ57Do?si=nfFddZnKqDfwKV0L"
                title="Kayode Olawoye Ministries"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full  h-[250px] md:h-[350px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
