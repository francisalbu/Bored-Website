import React from 'react';
import { Play, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50 grayscale-[20%]"
            poster="https://images.unsplash.com/photo-1590223436388-621d86858f14?q=80&w=2574&auto=format&fit=crop"
        >
            {/* 
                Placeholder video used. 
                Replace the src below with the path to your specific 'bored tourists' video file. 
            */}
            <source src="https://storage.googleapis.com/bored_tourist_media/videos/Lisbon_Tourist_Loop_Video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-offblack via-offblack/60 to-transparent" />
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Social Proof Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
            <div className="flex -space-x-2">
                <img src="https://picsum.photos/30/30?random=1" className="w-6 h-6 rounded-full border border-black" alt="User" />
                <img src="https://picsum.photos/30/30?random=2" className="w-6 h-6 rounded-full border border-black" alt="User" />
                <img src="https://picsum.photos/30/30?random=3" className="w-6 h-6 rounded-full border border-black" alt="User" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Join 2,400+ Travelers</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-6">
          BORED <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-emerald-400">TOURIST</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium mb-10">
          Boredom Is a Choice. We Are The Cure.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button 
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-neon hover:bg-neon/90 text-offblack px-8 py-4 text-lg font-black uppercase tracking-wide transform hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            Join the Waitlist
          </button>
          <button className="group flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-neon hover:text-neon transition-colors bg-black/20 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={14} className="fill-current ml-1" />
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">Watch the vibe</span>
          </button>
        </div>
      </div>
    </section>
  );
};