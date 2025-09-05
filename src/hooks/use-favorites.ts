'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'funkinverse-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to load favorites from localStorage', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleFavorite = useCallback((modId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(modId)
        ? prev.filter(id => id !== modId)
        : [...prev, modId];
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage', error);
      }
      return newFavorites;
    });
  }, []);

  return { favorites, toggleFavorite, isLoaded };
};
