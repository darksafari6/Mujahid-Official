import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Terminal, Network, Shield, Cpu, Code, Skull, Volume2, VolumeX, TrendingUp, Globe, DollarSign } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import CyberSkull3D from './CyberSkull3D';
import { useCyberAudio } from '../hooks/useCyberAudio';

export default function Hero() {
  const { isPlaying, toggleAudio } = useCyberAudio();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-900/20 border border-cyan-600/30 w-fit">
            <ShieldAlert className="w-5 h-5 text-cyan-500 animate-pulse" />
            <span className="font-mono text-sm text-cyan-500 uppercase tracking-widest">Professional Forex & Binary Trader</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white leading-tight animate-trading-flicker">
            MUJAHID <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400">MARKET MASTERY</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed font-mono">
            <span className="text-cyan-400 font-semibold">Market Analysis Active.</span> I am Mujahid Islam, a professional trader from Pakistan specializing in Forex, Binary Options, and AI-driven market prediction strategies.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button className="px-8 py-3 font-orbitron font-bold tracking-wider uppercase text-black bg-cyan-400 hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_40px_rgba(0,210,255,0.8)]">
              Get Signals
            </button>
            <button className="px-6 py-3 font-orbitron text-sm tracking-wider uppercase text-gray-400 hover:text-white transition-colors border border-cyan-900/50 hover:border-cyan-600 bg-black/50 hover:bg-cyan-900/20 rounded">
              View Charts
            </button>
          </div>

          {/* Tech Viz Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Shield, title: "Forex Trading", tags: ["Major Pairs", "Risk Mgmt"] },
              { icon: Code, title: "Binary Options", tags: ["60s Trades", "High Accuracy"] },
              { icon: Cpu, title: "AI Trading", tags: ["Bot Dev", "Algorithmic"] }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-[#000a12]/80 backdrop-blur-sm p-5 rounded-xl border-t-2 border-t-cyan-900/50 hover:border-t-cyan-600 transition-colors group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <item.icon className="w-8 h-8 text-cyan-700 mb-3 group-hover:text-cyan-400 transition-colors" />
                <h4 className="font-orbitron font-bold text-white mb-2">{item.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-black rounded border border-cyan-900/30 text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - 3D Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] flex items-center justify-center hidden lg:flex perspective-1000"
        >
          {/* 3D Hologram Container */}
          <div className="relative w-full h-full flex items-center justify-center animate-float-3d preserve-3d">
            {/* 3D Cyber Images */}
            <img 
              src="https://images.unsplash.com/photo-1611974717484-1490b30ee3c3?auto=format&fit=crop&w=600&q=80" 
              alt="Trading Charts" 
              className="absolute w-72 h-96 object-cover rounded-2xl opacity-40 shadow-[0_0_50px_rgba(0,210,255,0.4)] border border-cyan-900/50 translate-z-10 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80" 
              alt="Forex Market" 
              className="absolute w-64 h-80 object-cover rounded-2xl opacity-60 shadow-[0_0_40px_rgba(0,114,255,0.4)] border border-cyan-800/50 translate-x-20 translate-y-10 translate-z-20 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=600&q=80" 
              alt="Crypto Trading" 
              className="absolute w-56 h-72 object-cover rounded-2xl opacity-50 shadow-[0_0_30px_rgba(0,210,255,0.3)] border border-cyan-700/50 -translate-x-24 -translate-y-12 translate-z-30 mix-blend-screen"
              referrerPolicy="no-referrer"
            />
            
            {/* Core Sphere & Rings */}
            <div className="absolute w-full h-full flex items-center justify-center translate-z-30 pointer-events-none">
              <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-cyan-900/40 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute w-96 h-96 rounded-full border border-cyan-600/30 animate-[spin_20s_linear_infinite]"></div>
            </div>
            
            {/* Floating Icons */}
            <TrendingUp className="absolute top-1/4 left-1/4 w-12 h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,210,255,0.8)] animate-pulse translate-z-30" />
            <Globe className="absolute bottom-1/4 right-1/4 w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(0,114,255,0.8)] animate-bounce translate-z-30" style={{ animationDuration: '3s' }} />
            <DollarSign className="absolute top-1/3 right-1/3 w-10 h-10 text-cyan-500 drop-shadow-[0_0_15px_rgba(50,255,255,0.8)] animate-pulse translate-z-30" style={{ animationDelay: '1s' }} />

            {/* Center 3D Skull */}
            <div className="absolute w-64 h-64 flex items-center justify-center translate-z-40">
              <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00d2ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d2ff" />
                <CyberSkull3D />
                <EffectComposer>
                  <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={2} />
                </EffectComposer>
              </Canvas>
            </div>

            {/* Audio Toggle */}
            <button 
              onClick={toggleAudio}
              className="absolute bottom-4 right-4 z-50 p-3 rounded-full bg-[#000a12]/80 border border-cyan-900/50 text-cyan-400 hover:bg-cyan-900/30 hover:text-cyan-300 transition-all backdrop-blur-md shadow-[0_0_15px_rgba(0,210,255,0.2)]"
              title={isPlaying ? "Disable Ambient Sound" : "Enable Ambient Sound"}
            >
              {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
