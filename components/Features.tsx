import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Zap, Map, Users } from 'lucide-react';

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Feature Text Left */}
            <div className="space-y-12 order-2 lg:order-1">
                <div className="group">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon transition-colors duration-300">
                        <Zap className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Doomscroll for Adventure</h4>
                    <p className="text-gray-400">
                        The interface you know (TikTok style), applied to the world around you. Watch 15s clips of experiences, not just read boring reviews.
                    </p>
                </div>

                <div className="group">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon transition-colors duration-300">
                        <Users className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Curated by Locals, Not Agencies</h4>
                    <p className="text-gray-400">
                        We filter out the boring stuff. No generic "Yellow Bus" tours. Only authentic, high-energy experiences verified by our team.
                    </p>
                </div>
            </div>

            {/* Mockup Center */}
            <div className="order-1 lg:order-2 flex justify-center relative">
                 {/* Floating badges */}
                 <div className="absolute top-20 -left-10 bg-white text-black font-bold text-xs px-3 py-1 rounded shadow-lg transform -rotate-6 z-10 hidden md:block">
                    🎥 Video First
                 </div>
                 <div className="absolute bottom-40 -right-10 bg-neon text-black font-bold text-xs px-3 py-1 rounded shadow-lg transform rotate-6 z-10 hidden md:block">
                    ⚡️ Instant Booking
                 </div>

                <PhoneMockup 
                    // Using the specific screenshot provided
                    image="https://storage.googleapis.com/bored_tourist_media/images/gallery/IMG_9CA38CE26560-1.jpeg"
                    type="feed"
                />
            </div>

            {/* Feature Text Right */}
            <div className="space-y-12 order-3">
                 <div className="group">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon transition-colors duration-300">
                        <Map className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Tech-Powered Itineraries</h4>
                    <p className="text-gray-400">
                        Connect with Spotify and Instagram to let our AI build an itinerary that matches your actual vibe, not a generic persona.
                    </p>
                </div>
                
                {/* Mini CTA in grid */}
                <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-2xl border border-gray-700">
                    <p className="text-white font-bold mb-4">Ready to ditch the guide book?</p>
                    <button 
                        onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-neon hover:text-white border-b border-neon hover:border-white pb-1 transition-all text-sm uppercase font-bold"
                    >
                        Join the waitlist &rarr;
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};