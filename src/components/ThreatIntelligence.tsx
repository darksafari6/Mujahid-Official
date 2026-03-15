import React from 'react';
import { motion } from 'motion/react';
import { Eye, Skull, Radar, ShieldAlert, Fingerprint } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ThreatIntelligence() {
  const threats = [
    {
      title: "Dark Web Monitoring",
      icon: Eye,
      desc: "Infiltrating deep web forums, tracking illicit marketplaces, and monitoring breached data dumps in real-time.",
      color: "text-red-600",
      border: "border-red-600/50",
      bg: "bg-red-900/20"
    },
    {
      title: "APT Hunting",
      icon: Radar,
      desc: "Tracking Advanced Persistent Threats (APTs), analyzing nation-state malware, and mapping attacker infrastructure.",
      color: "text-red-500",
      border: "border-red-500/50",
      bg: "bg-red-900/20"
    },
    {
      title: "Botnet Infiltration",
      icon: Skull,
      desc: "Reverse-engineering C2 (Command & Control) protocols to hijack and dismantle malicious botnet networks.",
      color: "text-red-700",
      border: "border-red-700/50",
      bg: "bg-red-900/20"
    },
    {
      title: "Digital Forensics",
      icon: Fingerprint,
      desc: "Extracting hidden artifacts from compromised systems, memory dumps, and encrypted volumes.",
      color: "text-red-400",
      border: "border-red-400/50",
      bg: "bg-red-900/20"
    }
  ];

  return (
    <section id="threat-intel" className="relative py-32 bg-[#030000] border-y border-red-900/30 overflow-hidden">
      {/* Horror / Dark Background Effects */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #5a0000 0%, transparent 60%)',
      }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none filter grayscale contrast-200"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <ShieldAlert className="w-12 h-12 text-red-600 animate-pulse drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest glitch" data-text="Threat Intelligence">
              <span className="text-red-600">Threat</span> Intelligence
            </h2>
          </div>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80"></div>
          <p className="mt-6 text-gray-400 font-mono max-w-2xl mx-auto">
            Descending into the darkest corners of the web. Monitoring, analyzing, and neutralizing apex predators in the digital realm.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D Horror/Hacker Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <TiltCard className="w-full h-[500px] group cursor-crosshair">
              <div className="absolute inset-0 rounded-2xl border border-red-900/80 bg-black overflow-hidden preserve-3d shadow-[0_0_80px_rgba(255,0,0,0.2)]">
                {/* Creepy Background Image */}
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
                  alt="Dark Web" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 translate-z-[-30px] filter contrast-200 grayscale sepia-[.8] hue-rotate-[-50deg]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent translate-z-10"></div>

                {/* Floating Elements */}
                <div className="absolute inset-0 flex items-center justify-center translate-z-40">
                  <div className="relative">
                    <Skull className="w-32 h-32 text-red-600 drop-shadow-[0_0_40px_rgba(255,0,0,1)] animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-red-600/50 rounded-full animate-[spin_3s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-dashed border-red-700/40 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-red-800/20 rounded-full animate-[spin_7s_linear_infinite]"></div>
                  </div>
                </div>

                {/* Glitch Text Overlay */}
                <div className="absolute bottom-8 left-8 translate-z-30">
                  <p className="font-mono text-xs text-red-500 mb-1 animate-pulse">&gt; INTERCEPTING_TRAFFIC...</p>
                  <p className="font-mono text-xs text-red-500 mb-1">&gt; DECRYPTING_ONION_ROUTING...</p>
                  <p className="font-mono text-xs text-red-600 font-bold glitch" data-text="TARGET_ACQUIRED">TARGET_ACQUIRED</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right: Threat Vectors */}
          <div className="space-y-6">
            {threats.map((threat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-black/80 p-6 rounded-xl border-l-4 ${threat.border} hover:bg-red-900/10 transition-all group relative overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.05)] hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]`}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${threat.bg} blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="relative z-10 flex gap-6 items-start">
                  <div className={`w-14 h-14 rounded-lg ${threat.bg} flex items-center justify-center ${threat.color} shrink-0 group-hover:scale-110 transition-transform duration-300 border ${threat.border}`}>
                    <threat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className={`text-xl font-orbitron font-bold text-white mb-2 group-hover:${threat.color} transition-colors`}>
                      {threat.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-mono leading-relaxed">
                      {threat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
