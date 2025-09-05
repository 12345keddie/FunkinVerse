import { mods } from '@/lib/mods';
import { Header } from '@/components/Header';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function PlayModPage({ params }: { params: { modId: string } }) {
  const { modId } = params;
  const mod = mods.find(m => m.id === modId);

  if (!mod) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-headline font-bold text-primary">{mod.title}</h1>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browser
            </Link>
          </Button>
        </div>
        <Card className="flex-grow bg-black/50 border-2 border-dashed border-primary/50 rounded-lg flex items-center justify-center text-center p-8 flex-col text-muted-foreground">
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
              <p className="text-xl backdrop-blur-sm bg-black/30 p-4 rounded-md">The mod "{mod.title}" would load and be playable here.</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
