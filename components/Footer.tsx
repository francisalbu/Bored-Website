import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-offblack text-white border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-black tracking-tighter mb-4">BORED TOURIST</h3>
                <p className="text-gray-400 max-w-sm">
                    The antidote to boring travel. We use technology to help you discover the city like a local, not a walking wallet.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold uppercase text-sm tracking-widest text-gray-500 mb-6">Company</h4>
                <ul className="space-y-4 text-gray-300">
                    <li><a href="#" className="hover:text-neon transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-neon transition-colors">Careers (We're hiring!)</a></li>
                    <li><a href="#" className="hover:text-neon transition-colors">Press Kit</a></li>
                    <li><a href="#" className="hover:text-neon transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold uppercase text-sm tracking-widest text-gray-500 mb-6">Legal Stuff</h4>
                <ul className="space-y-4 text-gray-300">
                    <li><a href="#" className="hover:text-neon transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-neon transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-neon transition-colors">Cookie Policy</a></li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
            <p className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Bored Tourist Inc. All rights reserved. 
                <span className="ml-2 hidden md:inline">Made with ⚡️ in Lisbon.</span>
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};