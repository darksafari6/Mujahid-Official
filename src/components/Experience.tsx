import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Globe, Cpu, LineChart } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      year: '2022 - Present',
      role: 'Senior Trading Strategist',
      company: 'Islam Trading Group',
      desc: 'Leading a team of professional traders and developing advanced AI-driven strategies for Forex and Binary Options markets.',
      icon: TrendingUp,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400'
    },
    {
      year: '2020 - 2022',
      role: 'Market Analyst',
      company: 'Global Forex Solutions',
      desc: 'Provided real-time market analysis and high-precision signals for major currency pairs, achieving a consistent 85%+ win rate.',
      icon: Globe,
      color: 'text-blue-400',
      borderColor: 'border-blue-400'
    },
    {
      year: '2018 - 2020',
      role: 'Algorithmic Trader',
      company: 'Prop Firm Alpha',
      desc: 'Developed and backtested custom trading bots for MT4/MT5, focusing on automated scalping and risk management algorithms.',
      icon: Cpu,
      color: 'text-cyan-600',
      borderColor: 'border-cyan-600'
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#000a12] border-y border-cyan-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <LineChart className="w-10 h-10 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Trading</span> Career
            </h2>
          </div>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-cyan-900/30 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-black border-2 ${exp.borderColor} -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_currentColor] ${exp.color} z-10`}>
                  <div className="w-2 h-2 rounded-full bg-current animate-ping"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl border-l-4 ${exp.borderColor} hover:scale-105 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-y border-r border-cyan-900/20 hover:shadow-[0_0_30px_rgba(0,210,255,0.2)]`}>
                    <div className="flex items-center gap-3 mb-2">
                      <exp.icon className={`w-6 h-6 ${exp.color}`} />
                      <span className="font-mono text-sm text-gray-500">{exp.year}</span>
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className={`text-lg font-mono mb-4 ${exp.color}`}>{exp.company}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {exp.desc}
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
