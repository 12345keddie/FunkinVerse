
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import Link from 'next/link';

export default function ShutdownPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1500); // Delay for the message to appear

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-6 max-w-2xl mx-auto">
          <div className={`transition-opacity duration-1000 ease-in-out ${showMessage ? 'opacity-0 h-0' : 'opacity-100'}`}>
            <Image
              src="/funkinlogo.png"
              alt="FunkinVerse Logo"
              width={400}
              height={100}
              className="object-contain mx-auto animate-pulse"
              priority
            />
          </div>

          <div className={`transition-opacity duration-1000 ease-in-out ${showMessage ? 'opacity-100' : 'opacity-0 h-0 invisible'}`}>
             <Image
              src="/funkinlogo.png"
              alt="FunkinVerse Logo"
              width={300}
              height={75}
              className="object-contain mx-auto mb-8"
            />
            <h1 className="text-3xl font-headline font-bold text-primary mb-4">
              This website is temporarily shutdown.
            </h1>
            <p className="text-muted-foreground text-lg">
              Please come back later or play some{' '}
              <a
                href="https://incredibox.com/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                Incredibox
              </a>{' '}
              and ask Leo if you need any questions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
