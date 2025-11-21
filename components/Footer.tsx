import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-offblack text-white border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
            <h3 className="text-4xl font-black tracking-tighter mb-4">BORED TOURIST</h3>
            <p className="text-gray-400 max-w-md">
                The antidote to boring travel. We use technology to help you discover the city like a local, not a walking wallet.
            </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
            <p className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Bored Tourist Inc. All rights reserved. 
                <span className="ml-2 hidden md:inline">Made with ⚡️ in Lisbon.</span>
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://instagram.com/bored_tourist" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};