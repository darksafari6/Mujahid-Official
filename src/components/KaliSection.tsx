import React from 'react';
import { motion } from 'motion/react';
import { Shield, Terminal, Settings, Zap, Code, Database, Lock, Laptop } from 'lucide-react';

export default function KaliSection() {
  const stats = [
    { icon: Terminal, title: "600+ Security Tools", desc: "Pre-installed & configured", color: "text-red-600" },
    { icon: Settings, title: "Custom Configs", desc: "Optimized workflows", color: "text-red-500" },
    { icon: Zap, title: "Rapid Deployment", desc: "Automated scripts", color: "text-red-400" },
    { icon: Code, title: "Script Dev", desc: "Bash/Python automation", color: "text-red-700" },
    { icon: Database, title: "Tool Databases", desc: "Exploit repositories", color: "text-red-800" },
    { icon: Lock, title: "Security", desc: "Penetration testing", color: "text-red-900" },
    { icon: Laptop, title: "OS Weight", desc: "Light-weight CLI & GUI", color: "text-gray-500" },
  ];

  return (
    <section id="kali" className="relative py-24 bg-[#050000] backdrop-blur-sm border-y border-red-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <Shield className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Kali Linux</span> Mastery
            </h2>
          </div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/80 backdrop-blur-md p-8 rounded-2xl relative overflow-hidden border border-red-900/50 shadow-[0_0_30px_rgba(255,0,0,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/20 blur-[50px] rounded-full"></div>
            
            <h3 className="text-2xl font-orbitron text-red-500 mb-6 flex items-center gap-3">
              <Terminal className="w-6 h-6" />
              Primary Penetration Testing Platform
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 font-mono text-sm">
              <strong className="text-red-600 font-normal">Kali Linux</strong> is a Debian-based Linux distribution designed for cybersecurity professionals. It comes pre-installed with 600+ penetration testing tools for security auditing. Developed and maintained by Offensive Security, it's the industry standard for ethical hacking and digital forensics.
              <br /><br />
              Kali provides specialized tools for network scanning, vulnerability analysis, wireless testing, and exploit development. It's used for legal security assessments, penetration testing and security research. The distribution is free, open-source, and regularly updated with the latest security tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-red-900/10 border border-red-900/30 hover:border-red-600/50 transition-colors">
                  <stat.icon className={`w-8 h-8 ${stat.color} shrink-0`} />
                  <div>
                    <h4 className={`font-orbitron text-sm font-bold ${stat.color} mb-1`}>{stat.title}</h4>
                    <p className="text-xs text-gray-500 font-mono">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Categories */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-orbitron text-white mb-8 flex items-center gap-3">
              <Database className="w-6 h-6 text-red-600" />
              Complete Tool Categories Mastered
            </h3>

            {[
              { title: "Information Gathering", icon: "search", color: "text-red-500", desc: "Network discovery, OSINT, DNS enumeration, subdomain discovery, and comprehensive footprinting techniques", tags: ["Nmap", "Maltego", "theHarvester"] },
              { title: "Wireless Security", icon: "wifi", color: "text-red-600", desc: "Wi-Fi assessment, packet injection, WEP/WPA/WPA2 cracking, rogue AP creation, and wireless attacks", tags: ["Aircrack-ng", "Wifite", "Kismet"] },
              { title: "Password Attacks", icon: "lock", color: "text-red-700", desc: "Credential testing, hash cracking, brute force attacks, dictionary attacks, and rainbow tables", tags: ["Hashcat", "John", "Hydra"] },
              { title: "Exploitation", icon: "bug", color: "text-red-800", desc: "Vulnerability exploitation, payload generation, post-exploitation, and privilege escalation", tags: ["Metasploit", "Msfvenom", "Searchsploit"] }
            ].map((cat, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-l-red-600 hover:border-l-red-500 transition-colors group border-y border-r border-red-900/20">
                <h4 className="text-lg font-orbitron font-bold text-white mb-2 flex items-center gap-3">
                  <span className={`${cat.color} group-hover:animate-pulse`}>[{cat.title}]</span>
                </h4>
                <p className="text-sm text-gray-400 font-mono mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-red-900/20 rounded border border-red-900/50 text-red-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
