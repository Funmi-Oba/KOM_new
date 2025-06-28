"use client";
import { useRef, useState } from "react";
import { PlayCircle } from "lucide-react";

const VideoPlayer = ({ src, type }) => {
  // VideoPlayer component to handle video playback with a play button overlay
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  const handlePlay = () => {
    // Function to handle play button click
    if (type === "local" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play(); // Start playing the video
    }

    setIsPlaying(true); // Update state to indicate the video is
  };

  const handleEnded = () => {
    if (type === "local" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause(); // Pause the video when it ends
    }

    setIsPlaying(false); // Update state to indicate the video is not playing
  };

  return (
    <div className="relative w-full md:w-3/4 mx-auto my-7 group">
      {type === "local" && (
        <>
          <video
            ref={videoRef} //
            src={src}
            onClick={handlePlay} // Handle video click to play
            onEnded={handleEnded} // Handle video end event
            controls
            className={`w-full rounded-lg shadow-lg transition-all duration-500 ${
              !isPlaying ? "brightness-65" : "brightness-100" // Apply brightness effect when not playing
            }`}
          />

          {!isPlaying && ( // Show play button overlay when video is not playing
            <button
              onClick={handlePlay} // Handle play button click
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <PlayCircle className="w-20 h-20 text-white hover:scale-110 transition duration-300" />
            </button>
          )}
        </>
      )}

      {type === "youtube" && (
        <>
          {!isPlaying && (
            <div
              className="w-full h-[240px] bg-black bg-opacity-60 flex items-center justify-center cursor-pointer brightness-75"
              onClick={handlePlay}
            >
              <PlayCircle className="w-20 h-20 text-white hover:scale-110 transition duration-300" />
            </div>
          )}
          {isPlaying && (
            <iframe
              className="w-full h-[240px]"
              src={`https://www.youtube.com/embed/${src}?autoplay=1`}
              title="YouTube video player"
            
              allowFullScreen
            />
          )}
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
