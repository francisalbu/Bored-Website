import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { supabase } from '../services/supabaseClient';

export const EarlyAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Connecting to the specific 'Emails' table you created
      const { error } = await supabase
        .from('Emails')
        .insert([{ email: email }]);

      if (error) throw error;

      setStatus('success');
      setEmail('');
    } catch (err: any) {
      console.error('Error submitting email:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Try again later.');
      
      // Optional: Reset error state after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <section id="early-access" className="py-32 bg-neon text-offblack relative overflow-hidden">
       {/* Marquee Background */}
       <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none">
            <div className="whitespace-nowrap animate-marquee text-[10rem] font-black leading-none">
                BORED TOURIST BORED TOURIST BORED TOURIST BORED TOURIST
            </div>
       </div>

       <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
                Don't miss it.
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
                We are launching in Lisbon early next year. Get early access, beta features, and a free drink on us when you book your first experience.
            </p>

            {status === 'success' ? (
                <div className="bg-offblack text-white p-8 rounded-2xl inline-flex flex-col items-center animate-fade-in shadow-2xl">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                        <Check size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                    <p className="text-gray-400">Keep an eye on your inbox. No spam, we promise.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <div className="flex-1 flex flex-col relative">
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="enter your email" 
                            className="w-full px-6 py-4 rounded-xl bg-offblack/10 border-2 border-offblack/20 text-offblack placeholder:text-offblack/50 focus:outline-none focus:border-offblack focus:bg-offblack/5 transition-all font-bold"
                        />
                        {status === 'error' && (
                            <div className="absolute -bottom-8 left-0 text-red-600 text-xs font-bold flex items-center gap-1">
                                <AlertCircle size={12} /> {errorMessage}
                            </div>
                        )}
                    </div>
                    <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className="bg-offblack text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-white hover:text-offblack transition-all flex items-center justify-center gap-2 disabled:opacity-70 h-[60px]"
                    >
                        {status === 'submitting' ? 'Joining...' : 'Get Access'}
                        {!status.startsWith('submitting') && <ArrowRight size={20} />}
                    </button>
                </form>
            )}

            <p className="mt-8 text-xs font-bold uppercase tracking-widest opacity-60">
                Limited spots available for Beta
            </p>
       </div>
    </section>
  );
};