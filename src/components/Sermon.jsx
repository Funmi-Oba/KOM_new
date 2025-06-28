import React from "react";
import VideoPlayer from "./VideoPlayer";

export default function Sermon() {
  return (
    <section className="bg-white px-6 py-4">
      <div>
        <h3 className="text-2xl md:text-3xl text-gray-900 font-bold text-center mt-10 mb-2">
          Recent Sermons
        </h3>
        <p className="text-center text-xl text-[#8f8f8f] mb-6">
          Listen to our latest messages and be inspired by the Word of God.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-[#cccccc]/50 rounded-lg shadow-md p-6 transition-transform hover:scale-105 min-h-[15rem]">
          <VideoPlayer
          type= "youtube"
          src='' // YouTube video ID
          className="w-full "
          />
          </div>
          <div className="bg-[#cccccc]/50 rounded-lg shadow-md p-6 transition-transform hover:scale-105 min-h-[15rem]">
          </div>
          <div className="bg-[#cccccc]/50 rounded-lg shadow-md p-6 transition-transform hover:scale-105 min-h-[15rem]">
          </div>
          <div className="bg-[#cccccc]/50 rounded-lg shadow-md p-6 transition-transform hover:scale-105 min-h-[15rem]">
          </div>
        </div>
      </div>
    </section>
  );
}
