'use client';

import { useState, useMemo, useEffect } from 'react';
import { mods } from '@/lib/mods';
import { useFavorites } from '@/hooks/use-favorites';
import { SearchAndFilter } from './SearchAndFilter';
import { ModCard } from './ModCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from '@/lib/utils';

export function ModBrowser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('all');
  const [songCount, setSongCount] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  
  const { favorites, toggleFavorite, isLoaded } = useFavorites();

  const featuredMods = ['entity', 'mid-fight-masses'];

  const filteredMods = useMemo(() => {
    let currentMods = activeTab === 'favorites' ? mods.filter(mod => favorites.includes(mod.id)) : mods;

    return currentMods.filter(mod => {
      const matchesSearch = mod.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficulty === 'all' || mod.difficulty === difficulty;
      const matchesSongCount = songCount === 'all' || 
        (songCount === '1-3' && mod.songs >= 1 && mod.songs <= 3) ||
        (songCount === '4-6' && mod.songs >= 4 && mod.songs <= 6) ||
        (songCount === '7+' && mod.songs >= 7);
      
      return matchesSearch && matchesDifficulty && matchesSongCount;
    });
  }, [searchTerm, difficulty, songCount, favorites, activeTab]);

  if (!isLoaded) {
    return <div className="text-center p-10">Loading mods...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList className="bg-white/5 border border-white/10">
            <TabsTrigger value="all">All Mods</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
        </Tabs>
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          songCount={songCount}
          setSongCount={setSongCount}
        />
      </div>
      
      {filteredMods.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMods.map(mod => (
            <ModCard
              key={mod.id}
              mod={mod}
              isFavorite={favorites.includes(mod.id)}
              onToggleFavorite={toggleFavorite}
              className={cn(featuredMods.includes(mod.id) && 'lg:col-span-2')}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold">No mods found</h2>
          <p className="text-muted-foreground mt-2">
            {activeTab === 'favorites' && favorites.length === 0 ? 'You haven\'t favorited any mods yet.' : 'Try adjusting your search or filters.'}
          </p>
        </div>
      )}
    </div>
  );
}
