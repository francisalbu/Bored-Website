import React from 'react';

interface PhoneMockupProps {
  image: string;
  type: 'feed' | 'booking'; // Kept for prop compatibility but not strictly used in this version
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ image }) => {
  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[640px] w-[320px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
      {/* Side Buttons */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg shadow-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg shadow-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg shadow-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg shadow-lg"></div>

      {/* Screen Container */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[30px] w-[120px] bg-black rounded-b-3xl z-20 flex justify-center items-start pt-2">
           {/* Camera/Speaker mesh */}
           <div className="w-16 h-4 bg-[#1a1a1a] rounded-full flex items-center justify-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#0f0f0f] opacity-50"></div>
           </div>
        </div>

        {/* The Screenshot Image */}
        <img 
          src={image} 
          alt="App Screenshot" 
          className="w-full h-full object-cover"
        />
        
        {/* Shine Effect on Screen */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30 pointer-events-none z-10"></div>
      </div>
    </div>
  );
};