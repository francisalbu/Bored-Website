import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { VibeCheck } from './components/VibeCheck';
import { EarlyAccess } from './components/EarlyAccess';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate assets loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-neon flex flex-col items-center justify-center text-offblack z-50">
        <Loader2 className="h-12 w-12 animate-spin mb-4" />
        <h1 className="text-4xl font-black uppercase tracking-tighter">Bored Tourist</h1>
        <p className="font-mono text-sm mt-2">Loading chaos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offblack selection:bg-neon selection:text-offblack">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <VibeCheck />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}