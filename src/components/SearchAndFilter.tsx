'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
  songCount: string;
  setSongCount: (count: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  difficulty,
  setDifficulty,
  songCount,
  setSongCount,
  sortBy,
  setSortBy,
}: SearchAndFilterProps) {
  return (
    <div className="flex gap-4 flex-wrap w-full md:w-auto justify-center md:justify-end">
      <div className="relative flex-grow md:flex-grow-0 md:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search mods..."
          className="pl-10 bg-white/5 border-white/10 focus:ring-primary"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-full sm:w-[180px] bg-white/5 border-white/10">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Sort by: Newest</SelectItem>
          <SelectItem value="oldest">Sort by: Oldest</SelectItem>
          <SelectItem value="title-asc">Sort by: Title (A-Z)</SelectItem>
          <SelectItem value="title-desc">Sort by: Title (Z-A)</SelectItem>
          <SelectItem value="difficulty-asc">Sort by: Difficulty (Easy-Insane)</SelectItem>
          <SelectItem value="difficulty-desc">Sort by: Difficulty (Insane-Easy)</SelectItem>
        </SelectContent>
      </Select>
      <Select value={difficulty} onValueChange={setDifficulty}>
        <SelectTrigger className="w-full sm:w-[180px] bg-white/5 border-white/10">
          <SelectValue placeholder="Filter by difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Difficulties</SelectItem>
          <SelectItem value="Easy">Easy</SelectItem>
          <SelectItem value="Normal">Normal</SelectItem>
          <SelectItem value="Hard">Hard</SelectItem>
          <SelectItem value="Insane">Insane</SelectItem>
        </SelectContent>
      </Select>
      <Select value={songCount} onValueChange={setSongCount}>
        <SelectTrigger className="w-full sm:w-[180px] bg-white/5 border-white/10">
          <SelectValue placeholder="Filter by song count" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Song Counts</SelectItem>
          <SelectItem value="1-3">1-3 Songs</SelectItem>
          <SelectItem value="4-6">4-6 Songs</SelectItem>
          <SelectItem value="7+">7+ Songs</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
