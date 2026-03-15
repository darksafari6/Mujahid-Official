import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp, Globe, Cpu, LineChart } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI Signal Generator',
      category: 'Trading Automation',
      image: 'https://images.unsplash.com/photo-1611974717484-1490b30ee3c3?auto=format&fit=crop&w=800&q=80',
      desc: 'A high-frequency AI signal generator that analyzes market sentiment and technical indicators to provide real-time entry points.',
      tags: ['Python', 'TensorFlow', 'WebSockets'],
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400'
    },
    {
      title: 'Forex Scalping Bot',
      category: 'Expert Advisor',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      desc: 'Advanced MT4/MT5 expert advisor optimized for low-latency scalping on major currency pairs with dynamic risk management.',
      tags: ['MQL4', 'MQL5', 'C++'],
      color: 'text-blue-400',
      borderColor: 'border-blue-400'
    },
    {
      title: 'Binary Options Matrix',
      category: 'Market Analysis',
      image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=800&q=80',
      desc: 'A comprehensive dashboard for Binary Options traders, featuring multi-timeframe analysis and trend strength indicators.',
      tags: ['React', 'D3.js', 'Node.js'],
      color: 'text-cyan-600',
      borderColor: 'border-cyan-600'
    },
    {
      title: 'Crypto Arbitrage Pro',
      category: 'Arbitrage',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80',
      desc: 'Real-time cryptocurrency arbitrage tool that monitors price differences across 20+ global exchanges.',
      tags: ['Go', 'Redis', 'Docker'],
      color: 'text-indigo-400',
      borderColor: 'border-indigo-400'
    },
    {
      title: 'Sentiment Analysis Engine',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      desc: 'NLP-based engine that scrapes financial news and social media to gauge market sentiment for specific assets.',
      tags: ['NLP', 'BERT', 'Scrapy'],
      color: 'text-purple-400',
      borderColor: 'border-purple-400'
    },
    {
      title: 'Risk Management Suite',
      category: 'Utility',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      desc: 'A collection of tools for calculating position sizes, drawdowns, and portfolio risk-to-reward ratios.',
      tags: ['TypeScript', 'Tailwind', 'Vite'],
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400'
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#000a12] backdrop-blur-sm border-y border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <TrendingUp className="w-10 h-10 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Trading</span> Projects
            </h2>
          </div>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              className={`bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border-t-4 ${project.borderColor} preserve-3d group shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-x border-b border-cyan-900/20 hover:shadow-[0_0_30px_rgba(0,210,255,0.2)]`}
            >
              {/* 3D Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/40 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-cyan-900/50 rounded font-mono text-xs text-cyan-400">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 translate-z-10">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-cyan-900/10 rounded border border-cyan-900/30 text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-cyan-900/30">
                  <a href="#" className={`flex items-center gap-2 text-sm font-mono ${project.color} hover:text-white transition-colors`}>
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                  <a href="#" className={`flex items-center gap-2 text-sm font-mono ${project.color} hover:text-white transition-colors`}>
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
