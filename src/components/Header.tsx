import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-6 border-b border-white/10 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
          <Gamepad2 className="w-8 h-8" />
          <span className="font-headline">FunkinVerse</span>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Browse Mods
          </Link>
          <Link href="/recommendations" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            AI Recommendations
          </Link>
        </nav>
      </div>
    </header>
  );
}
