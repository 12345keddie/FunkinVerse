import { Header } from '@/components/Header';
import { ModBrowser } from '@/components/ModBrowser';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto py-8 px-6">
        <h1 className="text-4xl font-headline font-bold text-center mb-2 text-primary tracking-tighter">Welcome to FunkinVerse</h1>
        <p className="text-center text-muted-foreground mb-8">Browse, play, and discover your next favorite Friday Night Funkin' mod.</p>
        <ModBrowser />
      </main>
    </div>
  );
}
