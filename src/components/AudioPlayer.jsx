"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, Download } from "lucide-react";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleSpeed = () => {
    const newRate = playbackRate === 1 ? 1.5 : 1;
    audioRef.current.playbackRate = newRate;
    setPlaybackRate(newRate);
  };

  const formatTime = (time) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = Math.floor(time % 60);
    return `${hrs > 0 ? hrs + ":" : ""}${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Controls */}
      <div className="flex items-center gap-2 mb-2">
        <button onClick={togglePlay} className="text-[#6A00A3]">
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        <span className="text-xs text-gray-600">{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 accent-[#6A00A3]"
        />

        <span className="text-xs text-gray-600">{formatTime(duration)}</span>
      </div>

      {/* Volume, Speed, Download */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            className="w-20 accent-[#6A00A3]"
          />
        </div>

        <button onClick={toggleSpeed} className="text-xs text-[#6A00A3]">
          {playbackRate}×
        </button>

        <a href={src} download className="text-[#6A00A3]">
          <Download className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
