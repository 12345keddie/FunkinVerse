'use client';

import { useRef, useEffect } from 'react';

export default function VideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoFileName = "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4";

  const playVideo = () => {
    const video = videoRef.current;
    if (video) {
      // Try to enter fullscreen
      video.requestFullscreen().catch(err => {
        console.log("Could not activate full-screen mode: ", err);
      });
      // Try to play the video
      video.play().catch(error => {
        console.log("Autoplay was prevented: ", error);
        // Autoplay was prevented, show a play button or prompt the user
      });
    }
  };

  useEffect(() => {
    // We add a small delay to ensure the component is fully mounted.
    const timer = setTimeout(playVideo, 100);

    // Try to play on first interaction if autoplay fails
    const interactionHandler = () => {
        playVideo();
        window.removeEventListener('click', interactionHandler);
        window.removeEventListener('keydown', interactionHandler);
    }

    window.addEventListener('click', interactionHandler);
    window.addEventListener('keydown', interactionHandler);

    return () => {
        clearTimeout(timer);
        window.removeEventListener('click', interactionHandler);
        window.removeEventListener('keydown', interactionHandler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={`/${encodeURIComponent(videoFileName)}`}
        controls
        loop
        className="w-full h-full object-cover"
        playsInline
        onClick={playVideo}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
