import React, { useState } from 'react';
import { generateVibeRecommendation } from '../services/geminiService';
import { Sparkles, RefreshCw } from 'lucide-react';

export const VibeCheck: React.FC = () => {
  const [mood, setMood] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    setResult(null);
    
    const recommendation = await generateVibeRecommendation(mood);
    setResult(recommendation);
    setLoading(false);
  };

  return (
    <section id="vibe-check" className="py-24 bg-offblack relative border-y border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block bg-neon text-black px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest mb-6">
            Powered by Gemini AI
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
          Vibe Check Lisbon
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Don't know what to do? Tell our sassy AI how you're feeling, and get a non-boring recommendation instantly.
        </p>

        <div className="bg-darkgray border border-gray-700 p-2 rounded-full max-w-lg mx-auto flex items-center shadow-2xl shadow-neon/10">
            <input 
                type="text" 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g., Hungover & hungry, or energetic & artistic..."
                className="flex-1 bg-transparent text-white px-6 py-4 focus:outline-none placeholder:text-gray-600"
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            />
            <button 
                onClick={handleCheck}
                disabled={loading}
                className="bg-neon hover:bg-white text-black p-4 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? <RefreshCw className="animate-spin" /> : <Sparkles />}
            </button>
        </div>

        {/* Result Area */}
        <div className={`mt-12 transition-all duration-500 ${result ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {result && (
                <div className="bg-gradient-to-br from-gray-900 to-black border border-neon/30 p-8 rounded-3xl relative max-w-2xl mx-auto">
                    <div className="absolute -top-3 -right-3 bg-neon text-black px-3 py-1 text-xs font-black uppercase transform rotate-3">
                        AI Choice
                    </div>
                    <p className="text-lg md:text-2xl font-medium text-white leading-relaxed font-marker">
                        "{result}"
                    </p>
                </div>
            )}
        </div>
        
        {/* Decorative tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-40">
            {['Chaos', 'Chill', 'Rave', 'History (Fun)', 'Food Coma', 'Surf'].map((tag) => (
                <span key={tag} className="border border-white/20 px-3 py-1 rounded-full text-xs text-white hover:border-neon hover:text-neon cursor-default transition-colors">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};