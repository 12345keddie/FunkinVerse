'use client';

import { useRef, useEffect } from 'react';

export default function VideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoFileName = "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4";

  const playVideoWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.requestFullscreen().catch(err => {
        console.log("Could not activate full-screen mode: ", err);
      });
      video.play().catch(error => {
        console.log("Playback was prevented: ", error);
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Autoplay was prevented, waiting for user interaction.", error);
        
        const interactionHandler = () => {
          playVideoWithSound();
          window.removeEventListener('click', interactionHandler);
          window.removeEventListener('keydown', interactionHandler);
        }

        window.addEventListener('click', interactionHandler);
        window.addEventListener('keydown', interactionHandler);

        return () => {
          window.removeEventListener('click', interactionHandler);
          window.removeEventListener('keydown', interactionHandler);
        };
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={`/${encodeURIComponent(videoFileName)}`}
        controls
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onClick={playVideoWithSound}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
