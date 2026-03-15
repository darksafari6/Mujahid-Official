import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, MessageSquare, Youtube, TrendingUp, Globe, DollarSign } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#000a12]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-cyan-900/50 shadow-[0_0_50px_rgba(0,210,255,0.15)] relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
          <div className="absolute -top-10 -right-10 opacity-5">
            <TrendingUp className="w-48 h-48 text-cyan-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider mb-6 relative z-10">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-mono relative z-10">
            Ready to elevate your trading game? Connect with me for expert signals, custom trading bots, or professional Forex & Binary mentorship.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <a 
              href="https://wa.me/923104020872" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-900/20 text-cyan-400 hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all duration-300 border border-cyan-400/30"
              title="WhatsApp"
            >
              <MessageSquare className="w-8 h-8" />
            </a>
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-900/20 text-cyan-400 border border-cyan-400/30 opacity-50 cursor-default"
              title="TikTok"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-8 h-8"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </div>
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-900/20 text-cyan-400 border border-cyan-400/30 opacity-50 cursor-default"
              title="YouTube"
            >
              <Youtube className="w-8 h-8" />
            </div>
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-900/20 text-cyan-400 border border-cyan-400/30 opacity-50 cursor-default"
              title="Gmail"
            >
              <Mail className="w-8 h-8" />
            </div>
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-900/20 text-cyan-400 border border-cyan-400/30 opacity-50 cursor-default"
              title="GitHub"
            >
              <Github className="w-8 h-8" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
