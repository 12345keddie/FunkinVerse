'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, X } from 'lucide-react';
import { Header } from '@/components/Header';

export default function Home() {
  const [showTrailer, setShowTrailer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayTrailer = () => {
    setShowTrailer(true);
    videoRef.current?.requestFullscreen().catch(err => {
      console.error("Error attempting to enable full-screen mode:", err.message, `(${err.name})`);
    });
    videoRef.current?.play();
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    videoRef.current?.pause();
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto py-8 px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <h1 className="text-5xl font-headline font-bold text-primary tracking-tighter animate-pulse">
            FunkinVerse v2.0
          </h1>
          <p className="text-2xl text-muted-foreground mt-4 mb-8">
            The Next Level Update is Here.
          </p>
          <Button onClick={handlePlayTrailer} size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg">
            <PlayCircle className="mr-2 h-6 w-6" />
            Play Trailer
          </Button>
        </main>
      </div>

      {showTrailer && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="/Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4"
            controls
            className="w-full h-full"
            onEnded={handleCloseTrailer}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCloseTrailer}
            className="absolute top-4 right-4 z-[101] text-white bg-black/50 hover:bg-black/75 hover:text-white"
            aria-label="Close trailer"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  );
}
