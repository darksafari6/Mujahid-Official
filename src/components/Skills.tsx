import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, BarChart3, PieChart, Activity, Globe, DollarSign, Cpu, Zap, ShieldCheck, LineChart, ChevronRight, Search, Shield, Bug, Key, Code, Brain } from 'lucide-react';

export default function Skills() {
  const tradingSkills = [
    {
      title: "Forex Mastery",
      icon: Globe,
      desc: "Advanced analysis of major currency pairs using institutional-grade indicators and price action strategies.",
      tags: ['Price Action', 'Major Pairs', 'Risk Mgmt', 'Fundamental']
    },
    {
      title: "Binary Options",
      icon: TrendingUp,
      desc: "High-precision short-term trading signals with optimized entry points for maximum profitability.",
      tags: ['60s Scalping', 'Candlestick', 'S&R', 'Indicators']
    },
    {
      title: "AI Trading Bots",
      icon: Cpu,
      desc: "Leveraging neural networks and machine learning to predict market trends and automate execution.",
      tags: ['Algorithmic', 'Neural Nets', 'Backtesting', 'MT4/MT5']
    },
    {
      title: "Market Psychology",
      icon: Activity,
      desc: "Mastering emotional control and trading discipline to maintain consistency in volatile markets.",
      tags: ['Discipline', 'Control', 'Focus', 'Consistency']
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#000a12] backdrop-blur-sm border-y border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <Brain className="w-10 h-10 text-cyan-400 animate-pulse drop-shadow-[0_0_15px_rgba(0,210,255,0.8)]" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
              Trading <span className="text-cyan-400">Expertise</span>
            </h2>
          </div>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {tradingSkills.map((skill, idx) => (
            <motion.div 
              key={skill.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl relative overflow-hidden group border border-cyan-900/50 shadow-[0_0_30px_rgba(0,210,255,0.1)] hover:shadow-[0_0_50px_rgba(0,210,255,0.2)] transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-50"></div>
              
              <h3 className="text-2xl font-orbitron text-white mb-6 flex items-center gap-3">
                <skill.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(0,210,255,0.8)]" />
                {skill.title}
              </h3>
              
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                {skill.desc}
              </p>
              
              <div className="pt-6 border-t border-cyan-900/30 flex flex-wrap gap-3">
                {skill.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-3 py-1.5 bg-cyan-900/20 rounded-full border border-cyan-900/50 text-cyan-400 hover:bg-cyan-900/40 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
