'use client';

import { useRef, useEffect, useCallback } from 'react';

export default function VideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoFileName = "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4";

  const playVideoWithSound = useCallback(() => {
    const video = videoRef.current;
    if (video && video.muted) {
      video.muted = false;
      if (video.paused) {
        video.play().catch(error => {
          console.log("Playback was prevented after interaction: ", error);
        });
      }
      video.requestFullscreen().catch(err => {
        console.log("Could not activate full-screen mode: ", err);
      });
    } else if (video && !video.paused) {
       video.requestFullscreen().catch(err => {
        console.log("Could not activate full-screen mode: ", err);
      });
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Start muted to allow autoplay
      video.muted = true; 
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay was prevented. Waiting for user interaction.", error);
        });
      }
    }

    const interactionHandler = () => {
      playVideoWithSound();
      window.removeEventListener('click', interactionHandler);
      window.removeEventListener('keydown', interactionHandler);
    };

    window.addEventListener('click', interactionHandler);
    window.addEventListener('keydown', interactionHandler);

    return () => {
      window.removeEventListener('click', interactionHandler);
      window.removeEventListener('keydown', interactionHandler);
    };
  }, [playVideoWithSound]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center" onClick={playVideoWithSound}>
      <video
        ref={videoRef}
        src={`/${encodeURIComponent(videoFileName)}`}
        controls
        loop
        autoPlay
        playsInline
        muted 
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
