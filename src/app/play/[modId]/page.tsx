'use client';

import { useRef, useState, useEffect, use } from 'react';
import { mods } from '@/lib/mods';
import { Header } from '@/components/Header';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Expand, Loader } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function PlayModPage({ params }: { params: { modId: string } }) {
  const { modId } = use(params);
  const mod = mods.find(m => m.id === modId);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will only run on the client, after the initial render.
    setIsClient(true);
  }, []);

  const handleFullScreen = () => {
    if (gameContainerRef.current) {
      gameContainerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  if (!mod) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-6 flex flex-col">
        <div className="flex justify-between items-center mb-4 gap-4">
          <h1 className="text-3xl font-headline font-bold text-primary">{mod.title}</h1>
          <div className="flex items-center gap-2">
            {mod.gameUrl && (
              <Button onClick={handleFullScreen} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <Expand className="mr-2 h-4 w-4" />
                Fullscreen
              </Button>
            )}
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Browser
              </Link>
            </Button>
          </div>
        </div>
        <Card className="flex-grow bg-black/50 border-2 border-dashed border-primary/50 rounded-lg flex items-center justify-center text-center p-8 flex-col text-muted-foreground">
          {mod.gameUrl ? (
            <div ref={gameContainerRef} className="w-full aspect-video relative max-w-4xl bg-black rounded-md overflow-hidden shadow-2xl shadow-primary/20">
              {isClient ? (
                <iframe
                  src={mod.gameUrl}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="fullscreen"
                  title={`Play ${mod.title}`}
                ></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <Loader className="h-8 w-8 animate-spin text-primary mb-4" />
                  <p>Loading Game...</p>
                </div>
              )}
            </div>
          ) : (
            <>
              <p className="text-2xl font-bold mb-4">Mod Launcher</p>
              <div className="w-full aspect-video relative max-w-4xl bg-black rounded-md overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  src={mod.imageUrl}
                  alt={`Gameplay of ${mod.title}`}
                  fill
                  className="object-cover opacity-30"
                  data-ai-hint="gameplay screenshot"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl backdrop-blur-sm bg-black/30 p-4 rounded-md">A playable version of "{mod.title}" is not available yet.</p>
                </div>
              </div>
            </>
          )}
        </Card>
      </main>
    </div>
  );
}
