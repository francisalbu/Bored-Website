import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Download, Map, BrainCircuit, Scroll, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-darkgray relative overflow-hidden scroll-mt-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-neon uppercase tracking-widest mb-2">How it Works</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Swipe. Discover. <span className="italic text-gray-500">Actually</span> Have Fun.
            </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Features */}
            <div className="lg:col-span-4 space-y-16 order-2 lg:order-1">
                {/* Feature 1: Doomscroll */}
                <div className="group text-left">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon transition-colors duration-300">
                        <Scroll className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Doomscroll for Adventure</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The interface you know (TikTok style), applied to the world around you. Watch 15s clips of experiences, not just read boring reviews.
                    </p>
                </div>

                {/* Feature 2: Locals */}
                <div className="group text-left">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon transition-colors duration-300">
                        <ShieldCheck className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Curated by Locals, Not Agencies</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We filter out the boring stuff. No generic "Yellow Bus" tours. Only authentic, high-energy experiences verified by our team.
                    </p>
                </div>
            </div>

            {/* Center Column: Phone */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative py-10 lg:py-0">
                 {/* Floating badges */}
                 <div className="absolute top-10 -left-4 bg-white text-black font-bold text-xs px-3 py-1 rounded shadow-lg transform -rotate-6 z-10 hidden md:block">
                    🎥 Video First
                 </div>
                 <div className="absolute bottom-20 -right-4 bg-neon text-black font-bold text-xs px-3 py-1 rounded shadow-lg transform rotate-6 z-10 hidden md:block">
                    ⚡️ Instant Booking
                 </div>

                <PhoneMockup 
                    video="https://storage.googleapis.com/bored_tourist_media/videos/boredvideo.mov"
                    type="feed"
                />
            </div>

            {/* Right Column Features */}
            <div className="lg:col-span-4 space-y-16 order-3">
                 {/* Feature 3: Socials */}
                 <div className="group text-left">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon transition-colors duration-300">
                        <Download className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">1 Tap Save from Socials</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Import any experience you see on social media (Instagram, TikTok, etc.) directly into your itinerary with a single click.
                    </p>
                </div>

                {/* Feature 4: Map */}
                <div className="group text-left">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon transition-colors duration-300">
                        <Map className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Live Adventure Map</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                         Real-time, interactive map showing pinned high-rated experiences and where other Bored Tourist users are currently checking in.
                    </p>
                </div>
            </div>
        </div>

        {/* Feature 5: AI (Bottom Center) */}
        <div className="mt-20 max-w-3xl mx-auto bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-50"></div>
             
             <div className="relative z-10">
                <div className="w-16 h-16 bg-black border border-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:border-neon transition-colors">
                    <BrainCircuit size={32} className="text-neon" />
                </div>
                <h4 className="text-3xl font-black text-white mb-4">Context-Aware Algorithmic Discovery</h4>
                <p className="text-gray-400 text-lg">
                    Our AI instantly builds perfect adventure recommendations by analyzing <span className="text-white font-bold">real-time local weather</span>, your <span className="text-white font-bold">current mood</span>, and immediate host availability.
                </p>
             </div>
        </div>

      </div>
    </section>
  );
};