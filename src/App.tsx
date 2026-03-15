import React, { useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import CyberWarfare from './components/CyberWarfare';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { useClickSound } from './hooks/useClickSound';
import { MessageSquare, Github, Youtube, Mail, TrendingUp, Globe, DollarSign } from 'lucide-react';

export default function App() {
  const playClick = useClickSound();

  useEffect(() => {
    const handleGlobalClick = () => {
      playClick();
    };

    window.addEventListener('mousedown', handleGlobalClick);

    // Terminal notification auto-hide
    const terminalNotification = document.querySelector('.terminal-notification') as HTMLElement;
    if (terminalNotification) {
      setTimeout(() => {
        terminalNotification.style.opacity = '0';
        terminalNotification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          terminalNotification.style.display = 'none';
        }, 500);
      }, 5000);
    }

    return () => {
      window.removeEventListener('mousedown', handleGlobalClick);
    };
  }, [playClick]);

  return (
    <>
      <Background />
      
      <div className="terminal-notification fixed top-24 right-6 bg-black/90 backdrop-blur-md border border-cyan-900/50 p-4 rounded-lg shadow-[0_0_20px_rgba(0,210,255,0.2)] z-50 font-mono text-sm flex items-center gap-3 transition-all duration-500 max-w-[90vw]">
        <div className="text-cyan-400 font-bold">mujahid@trading:~#</div>
        <span className="text-gray-300">Market analysis initialized. Loading signal matrix...</span>
        <div className="w-2 h-4 bg-cyan-600 animate-pulse"></div>
      </div>

      <Header />
      
      <main className="relative z-10 pt-16">
        <Hero />
        <CyberWarfare />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 bg-[#000a12] backdrop-blur-md border-t border-cyan-900/30 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xl mb-4 text-white font-orbitron tracking-wider">
            © 2024 Mujahid Islam | Professional Forex & Binary Trader | AI Specialist
          </p>
          <p className="text-gray-500 font-mono text-sm mb-8">
            Expert Market Analyst | Based in Pakistan | Global Trading Mentorship Available
          </p>

          <div className="flex justify-center gap-6 mb-10">
            <a href="https://wa.me/923104020872" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-200 transition-colors">
              <MessageSquare className="w-6 h-6" />
            </a>
            <div className="text-cyan-400/50 cursor-default">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </div>
            <div className="text-cyan-400/50 cursor-default">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-cyan-400/50 cursor-default">
              <Github className="w-6 h-6" />
            </div>
          </div>

          <div className="flex justify-center gap-8 text-cyan-400/50 font-mono text-xs uppercase tracking-[0.3em]">
            <span>Real-time Signals</span>
            <span>AI Market Monitoring</span>
            <span>Secure Trading</span>
          </div>
        </div>
      </footer>
    </>
  );
}
