'use client';

import { useRef, useEffect } from 'react';

export default function VideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoFileName = "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Autoplay with sound was prevented by the browser.", error);
      });
      video.requestFullscreen().catch(err => {
        console.log("Could not activate full-screen mode automatically.", err);
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
        playsInline
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
