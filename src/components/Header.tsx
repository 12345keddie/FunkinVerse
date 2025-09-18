'use client';

import Link from 'next/link';
import { Menu, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

export function Header() {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const closeSheet = () => setIsSheetOpen(false);

  const ThemeToggle = () => (
    <div className="flex items-center gap-2">
      <Label htmlFor="theme-switch" className="text-sm font-medium text-gray-300">
        {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="sr-only">Toggle theme</span>
      </Label>
      <Switch
        id="theme-switch"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
    </div>
  );

  return (
    <header className="py-4 px-6 border-b border-white/10 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
          <Image src="/funkinlogo.png" alt="FunkinVerse Logo" width={180} height={40} className="object-contain" />
        </Link>
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 text-foreground">
              <nav className="flex flex-col gap-6 items-start p-6 text-lg">
                <Link href="/" onClick={closeSheet} className="font-medium text-gray-300 hover:text-primary transition-colors">
                  Browse Mods
                </Link>
                <Link href="/recommendations" onClick={closeSheet} className="font-medium text-gray-300 hover:text-primary transition-colors">
                  AI Recommendations
                </Link>
                <div className="pt-4 border-t border-white/10 w-full">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex gap-6 items-center">
            <ThemeToggle />
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Browse Mods
            </Link>
            <Link href="/recommendations" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              AI Recommendations
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
