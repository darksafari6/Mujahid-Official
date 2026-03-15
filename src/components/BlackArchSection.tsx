import React from 'react';
import { motion } from 'motion/react';
import { Skull, Terminal, Database, Code, Zap } from 'lucide-react';

export default function BlackArchSection() {
  const features = [
    { icon: Database, title: "2800+ Tools", desc: "Massive repository of specialized security tools.", color: "text-red-500" },
    { icon: Terminal, title: "Arch Base", desc: "Rolling release, bleeding-edge packages.", color: "text-red-400" },
    { icon: Code, title: "Custom WMs", desc: "Lightweight window managers (i3, fluxbox).", color: "text-red-600" },
    { icon: Zap, title: "Performance", desc: "Minimal overhead, maximum execution speed.", color: "text-red-500" },
  ];

  return (
    <section id="blackarch" className="relative py-24 bg-[#0a0000] border-y border-red-900/30 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.2) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <Skull className="w-12 h-12 text-red-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest">
              <span className="text-red-600">BlackArch</span> Linux
            </h2>
          </div>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D Terminal/Hologram */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] flex items-center justify-center perspective-1000"
          >
            <div className="relative w-full h-full flex items-center justify-center animate-float-3d preserve-3d">
              {/* Red Hologram Rings */}
              <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-red-600/40 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute w-80 h-80 rounded-full border border-red-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Central Skull */}
              <Skull className="absolute w-32 h-32 text-red-600 drop-shadow-[0_0_30px_rgba(255,0,0,0.8)] translate-z-30" />
              
              {/* Floating Code Snippets */}
              <div className="absolute top-10 left-10 bg-black/80 border border-red-900/50 p-3 rounded font-mono text-xs text-red-500 translate-z-20 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                pacman -S blackarch
              </div>
              <div className="absolute bottom-10 right-10 bg-black/80 border border-red-900/50 p-3 rounded font-mono text-xs text-red-500 translate-z-40 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                blackarch-install
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-red-900/50 shadow-[0_0_40px_rgba(255,0,0,0.1)]">
              <h3 className="text-2xl font-orbitron text-red-500 mb-4 flex items-center gap-3">
                <Terminal className="w-6 h-6" />
                The Ultimate Arsenal
              </h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                While Kali Linux is the industry standard, <strong className="text-red-500 font-normal">BlackArch Linux</strong> is the weapon of choice for elite researchers. Built on top of Arch Linux, it provides a lightweight, highly customizable environment with an unparalleled repository of over 2800 specialized security tools.
                <br /><br />
                As a BlackArch user, I leverage its bleeding-edge rolling release model to stay ahead of zero-day threats, utilizing custom scripts and minimal window managers for maximum performance during intense red team engagements.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded bg-red-900/10 border border-red-900/30 hover:bg-red-900/20 transition-colors">
                    <feature.icon className={`w-6 h-6 ${feature.color} shrink-0`} />
                    <div>
                      <h4 className={`font-orbitron text-xs font-bold ${feature.color} mb-1`}>{feature.title}</h4>
                      <p className="text-[10px] text-gray-500 font-mono">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
