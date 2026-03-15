import React from 'react';
import { motion } from 'motion/react';
import { Eye, Lock, Globe, ShieldAlert, Fingerprint, Ghost } from 'lucide-react';
import TiltCard from './TiltCard';

export default function DarkWebOps() {
  const ops = [
    {
      id: 'osint',
      title: 'Advanced OSINT',
      icon: Eye,
      desc: 'Deep web intelligence gathering, footprinting, and deanonymization of threat actors across hidden networks.',
      image: 'https://images.unsplash.com/photo-1510511459019-5efa3274ba32?auto=format&fit=crop&w=800&q=80',
      color: 'text-red-500',
      borderColor: 'border-red-500',
      shadow: 'shadow-[0_0_40px_rgba(239,68,68,0.3)]'
    },
    {
      id: 'crypto',
      title: 'Crypto Forensics',
      icon: Fingerprint,
      desc: 'Tracing illicit cryptocurrency transactions, blockchain analysis, and identifying dark market infrastructure.',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
      color: 'text-red-600',
      borderColor: 'border-red-600',
      shadow: 'shadow-[0_0_40px_rgba(220,38,38,0.3)]'
    },
    {
      id: 'stealth',
      title: 'Stealth Operations',
      icon: Ghost,
      desc: 'Covert infiltration of cybercriminal forums, maintaining persistent access, and extracting actionable intelligence.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      color: 'text-red-700',
      borderColor: 'border-red-700',
      shadow: 'shadow-[0_0_40px_rgba(185,28,28,0.3)]'
    }
  ];

  return (
    <section id="dark-web" className="relative py-32 bg-[#020000] backdrop-blur-md border-y border-red-900/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <Globe className="w-12 h-12 text-red-700 animate-pulse drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]" />
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white uppercase tracking-wider glitch" data-text="Dark Web Ops">
              <span className="text-red-700">Dark Web</span> Ops
            </h2>
          </div>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-red-700 to-transparent opacity-80"></div>
          <p className="mt-6 text-red-500/80 font-mono max-w-2xl mx-auto text-lg">
            NAVIGATING THE SHADOWS. UNCOVERING THE UNSEEN.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {ops.map((op, i) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <TiltCard className="w-full h-[500px] group cursor-crosshair">
                <div className={`absolute inset-0 rounded-3xl border-2 ${op.borderColor} ${op.shadow} overflow-hidden bg-black preserve-3d`}>
                  
                  {/* Background Image (Pushed Back in 3D) */}
                  <div 
                    className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-50 transition-opacity duration-700 translate-z-[-20px] mix-blend-luminosity grayscale group-hover:grayscale-0 sepia-[.8] hue-rotate-[-30deg]"
                    style={{
                      backgroundImage: `url(${op.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  {/* Glitch Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay group-hover:animate-pulse"></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

                  {/* Content (Pulled Forward in 3D) */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-30">
                    <div className={`w-16 h-16 rounded-2xl bg-black/80 backdrop-blur-md border border-red-900/50 flex items-center justify-center mb-6 ${op.color} shadow-[0_0_20px_rgba(255,0,0,0.4)] group-hover:scale-110 transition-transform duration-500`}>
                      <op.icon className="w-8 h-8 drop-shadow-[0_0_10px_currentColor]" />
                    </div>
                    
                    <h3 className="text-3xl font-orbitron font-bold text-white mb-4 group-hover:text-red-600 transition-colors drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                      {op.title}
                    </h3>
                    
                    <p className="text-gray-400 font-mono text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {op.desc}
                    </p>

                    {/* Decorative Corner Brackets */}
                    <div className={`absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 ${op.borderColor} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 ${op.borderColor} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 ${op.borderColor} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 ${op.borderColor} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
