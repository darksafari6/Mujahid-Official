import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, BarChart3, PieChart, Activity, Globe, DollarSign } from 'lucide-react';
import TiltCard from './TiltCard';

export default function CyberWarfare() {
  const operations = [
    {
      id: 'forex',
      title: 'Forex Mastery',
      icon: Globe,
      desc: 'Advanced analysis of major currency pairs using institutional-grade indicators and price action strategies.',
      image: 'https://images.unsplash.com/photo-1611974717484-1490b30ee3c3?auto=format&fit=crop&w=800&q=80',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400',
      shadow: 'shadow-[0_0_40px_rgba(0,210,255,0.4)]'
    },
    {
      id: 'binary',
      title: 'Binary Options',
      icon: TrendingUp,
      desc: 'High-precision short-term trading signals with optimized entry points for maximum profitability.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      color: 'text-blue-400',
      borderColor: 'border-blue-400',
      shadow: 'shadow-[0_0_40px_rgba(0,114,255,0.4)]'
    },
    {
      id: 'ai-trading',
      title: 'AI Algorithmic',
      icon: Activity,
      desc: 'Leveraging neural networks and machine learning to predict market trends and automate execution.',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80',
      color: 'text-cyan-600',
      borderColor: 'border-cyan-600',
      shadow: 'shadow-[0_0_40px_rgba(0,180,216,0.4)]'
    },
    {
      id: 'crypto',
      title: 'Crypto Insights',
      icon: DollarSign,
      desc: 'Deep dive into cryptocurrency markets, identifying high-potential altcoins and Bitcoin trends.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80',
      color: 'text-indigo-400',
      borderColor: 'border-indigo-400',
      shadow: 'shadow-[0_0_40px_rgba(112,0,255,0.4)]'
    }
  ];

  return (
    <section id="cyber-warfare" className="relative py-32 bg-[#000a12] backdrop-blur-md border-y border-cyan-900/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <BarChart3 className="w-12 h-12 text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(0,210,255,0.8)]" />
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white uppercase tracking-wider">
              <span className="text-cyan-400">Market</span> Analysis
            </h2>
          </div>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"></div>
          <p className="mt-6 text-cyan-500/80 font-mono max-w-2xl mx-auto text-lg uppercase tracking-widest">
            Real-time Market Intelligence & Trading Strategies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {operations.map((op, i) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <TiltCard className="w-full h-[550px] group cursor-pointer">
                <div className={`absolute inset-0 rounded-3xl border-2 ${op.borderColor} ${op.shadow} overflow-hidden bg-black preserve-3d`}>
                  
                  {/* Background Image (Pushed Back in 3D) */}
                  <div 
                    className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-70 transition-opacity duration-700 translate-z-[-30px] mix-blend-luminosity group-hover:mix-blend-normal filter grayscale group-hover:grayscale-0"
                    style={{
                      backgroundImage: `url(${op.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  {/* Content (Pulled Forward in 3D) */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-40">
                    <motion.div 
                      className={`w-20 h-20 rounded-2xl bg-black/80 backdrop-blur-md border border-cyan-900/50 flex items-center justify-center mb-6 ${op.color} shadow-[0_0_30px_rgba(0,210,255,0.5)] group-hover:rotate-12 transition-all duration-500`}
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 0 50px rgba(0, 210, 255, 0.8)",
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <op.icon className="w-10 h-10 drop-shadow-[0_0_10px_currentColor]" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-orbitron font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]">
                      {op.title}
                    </h3>
                    
                    <p className="text-gray-400 font-mono text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {op.desc}
                    </p>

                    {/* Decorative Corner Brackets */}
                    <div className={`absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 ${op.borderColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 ${op.borderColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 ${op.borderColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 ${op.borderColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
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
