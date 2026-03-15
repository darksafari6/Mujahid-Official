import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, Code, Brain } from 'lucide-react';
import TiltCard from './TiltCard';

export default function TechCapabilities() {
  const capabilities = [
    {
      id: 'cyber',
      title: 'Cyber Security',
      icon: Shield,
      desc: 'Advanced penetration testing, red teaming, and vulnerability assessment using Kali Linux & BlackArch.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      color: 'text-red-500',
      borderColor: 'border-red-500',
      shadow: 'shadow-[0_0_40px_rgba(255,0,0,0.3)]'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: Code,
      desc: 'Full-stack engineering with modern frameworks (React, Node.js, Next.js) building secure, scalable applications.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      color: 'text-purple-500',
      borderColor: 'border-purple-500',
      shadow: 'shadow-[0_0_40px_rgba(168,85,247,0.3)]'
    },
    {
      id: 'ai',
      title: 'AI Understanding',
      icon: Brain,
      desc: 'Deep comprehension of LLMs, machine learning architectures, prompt engineering, and AI-driven automation.',
      image: 'https://images.unsplash.com/photo-1618060932014-4deda4932554?auto=format&fit=crop&w=800&q=80',
      color: 'text-green-500',
      borderColor: 'border-green-500',
      shadow: 'shadow-[0_0_40px_rgba(34,197,94,0.3)]'
    }
  ];

  return (
    <section id="capabilities" className="relative py-32 bg-[#050000] backdrop-blur-md border-y border-red-900/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <Cpu className="w-10 h-10 text-red-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
              <span className="text-red-600">Core</span> Capabilities
            </h2>
          </div>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
          <p className="mt-6 text-gray-400 font-mono max-w-2xl mx-auto">
            Hover over the 3D cards below to interact with the visual matrix.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <TiltCard className="w-full h-[500px] group cursor-crosshair">
                <div className={`absolute inset-0 rounded-3xl border-2 ${cap.borderColor} ${cap.shadow} overflow-hidden bg-cyber-dark preserve-3d`}>
                  
                  {/* Background Image (Pushed Back in 3D) */}
                  <div 
                    className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500 translate-z-[-20px]"
                    style={{
                      backgroundImage: `url(${cap.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/80 to-transparent"></div>

                  {/* Content (Pulled Forward in 3D) */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-30">
                    <div className={`w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 ${cap.color} shadow-[0_0_20px_currentColor] group-hover:scale-110 transition-transform duration-500`}>
                      <cap.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-3xl font-orbitron font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                      {cap.title}
                    </h3>
                    
                    <p className="text-cyber-text-muted font-mono text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {cap.desc}
                    </p>

                    {/* Decorative Corner Brackets */}
                    <div className={`absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 ${cap.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 ${cap.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 ${cap.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 ${cap.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
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
