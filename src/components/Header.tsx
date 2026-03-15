import React, { useState, useEffect } from 'react';
import { Terminal, TrendingUp, Cpu, Briefcase, Mail, Menu, X, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Terminal },
    { name: 'Markets', href: '#cyber-warfare', icon: TrendingUp },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Expertise', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Layout },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#00040a]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,242,255,0.1)] border-b border-white/5 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <Terminal className="text-cyan-400 w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="font-orbitron text-xl md:text-2xl font-black tracking-tighter text-white">
            MUJAHID<span className="text-cyan-400">.</span>TRADING
          </span>
        </motion.div>

        {/* Desktop Nav - Modern HUD Style */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all font-mono text-[10px] uppercase tracking-[0.2em] relative group rounded-full hover:bg-cyan-400/10 overflow-hidden"
            >
              <link.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">{link.name}</span>
              
              {/* Scanning Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_linear_infinite]"></div>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle - Strictly Mobile */}
        <button 
          className="lg:hidden relative z-50 p-2 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Market Ticker */}
      <div className="bg-cyan-400/5 border-y border-cyan-400/10 py-1 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12 items-center">
          {[
            { pair: 'EUR/USD', price: '1.0842', change: '+0.12%' },
            { pair: 'GBP/USD', price: '1.2654', change: '-0.05%' },
            { pair: 'USD/JPY', price: '149.32', change: '+0.24%' },
            { pair: 'BTC/USD', price: '68,432', change: '+1.45%' },
            { pair: 'ETH/USD', price: '3,842', change: '+0.82%' },
            { pair: 'GOLD', price: '2,154.20', change: '-0.15%' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 font-mono text-[10px] tracking-widest">
              <span className="text-white font-bold">{item.pair}</span>
              <span className="text-cyan-400">{item.price}</span>
              <span className={item.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}>
                {item.change}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            { pair: 'EUR/USD', price: '1.0842', change: '+0.12%' },
            { pair: 'GBP/USD', price: '1.2654', change: '-0.05%' },
            { pair: 'USD/JPY', price: '149.32', change: '+0.24%' },
            { pair: 'BTC/USD', price: '68,432', change: '+1.45%' },
            { pair: 'ETH/USD', price: '3,842', change: '+0.82%' },
            { pair: 'GOLD', price: '2,154.20', change: '-0.15%' },
          ].map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 font-mono text-[10px] tracking-widest">
              <span className="text-white font-bold">{item.pair}</span>
              <span className="text-cyan-400">{item.price}</span>
              <span className={item.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}>
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#00040a] flex flex-col items-center justify-center"
          >
            {/* Background Grid for Mobile Menu */}
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
            
            <nav className="relative z-10 flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-orbitron font-bold text-white hover:text-cyan-400 transition-colors group"
                >
                  <link.icon className="w-6 h-6 text-cyan-400 group-hover:scale-125 transition-transform" />
                  <span className="tracking-widest uppercase">{link.name}</span>
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-4">
              <div className="h-[1px] w-24 bg-cyan-900/50"></div>
              <p className="font-mono text-[10px] text-cyan-900 uppercase tracking-[0.5em]">
                Market Analysis Active
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
