'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Play, Music, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Mod } from '@/lib/mods';
import { cn } from '@/lib/utils';

interface ModCardProps {
  mod: Mod;
  isFavorite: boolean;
  onToggleFavorite: (modId: string) => void;
}

export function ModCard({ mod, isFavorite, onToggleFavorite }: ModCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 text-white overflow-hidden transform hover:scale-105 transition-transform duration-300 group shadow-lg hover:shadow-primary/20">
      <CardHeader className="p-0">
        <div className="relative h-40 w-full">
          <Image
            src={mod.imageUrl}
            alt={mod.title}
            fill
            className="object-cover group-hover:opacity-80 transition-opacity"
            data-ai-hint="game character"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold text-primary truncate">{mod.title}</CardTitle>
        <CardDescription className="text-sm text-gray-400 h-10 overflow-hidden text-ellipsis mt-1">{mod.description}</CardDescription>
        <div className="flex justify-between items-center mt-4 text-xs">
          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/50">
            <BarChart className="w-3 h-3 mr-1" />
            {mod.difficulty}
          </Badge>
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-400/50">
            <Music className="w-3 h-3 mr-1" />
            {mod.songs} Songs
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button asChild size="sm" className="bg-primary hover:bg-primary/80 text-white font-bold">
          <Link href={`/play/${mod.id}`}>
            <Play className="mr-2 h-4 w-4" /> Play
          </Link>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onToggleFavorite(mod.id)} aria-label="Toggle favorite">
          <Heart className={cn("w-5 h-5 transition-colors", isFavorite ? 'text-primary fill-current' : 'text-gray-500 hover:text-primary')} />
        </Button>
      </CardFooter>
    </Card>
  );
}
