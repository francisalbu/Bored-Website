import React from 'react';

interface PhoneMockupProps {
  image?: string;
  video?: string;
  type: 'feed' | 'booking'; 
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ image, video }) => {
  return (
    <div className="relative mx-auto w-[320px] h-[700px] bg-black rounded-[55px] shadow-[0_0_0_8px_#1a1a1a,0_0_0_10px_#333,0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20 animate-wiggle">
      {/* Side Buttons */}
      <div className="absolute -left-[12px] top-[120px] w-[4px] h-[35px] bg-[#2a2a2a] rounded-l-md"></div>
      <div className="absolute -left-[12px] top-[170px] w-[4px] h-[55px] bg-[#2a2a2a] rounded-l-md"></div>
      <div className="absolute -right-[12px] top-[130px] w-[4px] h-[80px] bg-[#2a2a2a] rounded-r-md"></div>

      {/* Screen Container */}
      <div className="w-full h-full rounded-[45px] overflow-hidden relative bg-black">
        {/* The Content (Video or Image) */}
        {video ? (
            <video 
                src={video} 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline 
            />
        ) : (
            <img 
                src={image} 
                alt="App Screenshot" 
                className="w-full h-full object-cover"
            />
        )}
        
        {/* Glass reflection effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-40 pointer-events-none z-20 rounded-[45px]"></div>
      </div>
    </div>
  );
};