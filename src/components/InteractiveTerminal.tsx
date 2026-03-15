import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string }[]>([
    { type: 'output', text: 'Welcome to SAFARI_OS v2.4.1' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  const simulateOutput = async (lines: string[], delay = 300) => {
    setIsProcessing(true);
    for (const line of lines) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setHistory(prev => [...prev, { type: 'output', text: line }]);
    }
    setIsProcessing(false);
  };

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const cmd = input.trim();
    const cmdLower = cmd.toLowerCase();
    const args = cmdLower.split(' ').slice(1);
    const baseCmd = cmdLower.split(' ')[0];
    
    setHistory(prev => [...prev, { type: 'input', text: `root@safari:~# ${cmd}` }]);
    setInput('');

    switch (baseCmd) {
      case 'help':
        setHistory(prev => [...prev, { type: 'output', text: 'Available commands: help, whoami, skills, clear, nmap, msfconsole, sqlmap, dirb' }]);
        break;
      case 'whoami':
        setHistory(prev => [...prev, { type: 'output', text: 'Safari - Elite Cyber Security Specialist, BlackArch & Kali Linux Master.' }]);
        break;
      case 'skills':
        setHistory(prev => [...prev, { type: 'output', text: 'Loading modules... [Penetration Testing, Red Teaming, Cryptography, Reverse Engineering, AI Exploitation, Web Dev]' }]);
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'nmap':
        if (args.length === 0) {
          setHistory(prev => [...prev, { type: 'output', text: 'nmap: missing target argument. Usage: nmap <target>' }]);
        } else {
          const target = args[0];
          await simulateOutput([
            `Starting Nmap 7.93 ( https://nmap.org ) at ${new Date().toISOString()}`,
            `Nmap scan report for ${target}`,
            'Host is up (0.042s latency).',
            'Not shown: 996 closed tcp ports (reset)',
            'PORT     STATE SERVICE       VERSION',
            '22/tcp   open  ssh           OpenSSH 8.2p1 Ubuntu 4ubuntu0.5',
            '80/tcp   open  http          Apache httpd 2.4.41 ((Ubuntu))',
            '443/tcp  open  ssl/http      Apache httpd 2.4.41',
            '3306/tcp open  mysql         MySQL 8.0.31-0ubuntu0.20.04.1',
            '',
            `Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds`
          ], 150);
        }
        break;
      case 'msfconsole':
        await simulateOutput([
          '     ,           ,',
          '    /             \\',
          '   ((__---,,,---__))',
          '      (_) O O (_)_________',
          '         \\ _ /            |\\',
          '          o_o \\   M S F   | \\',
          '               \\   _____  |  *',
          '                |||   WW|||',
          '                |||     |||',
          '',
          '=[ metasploit v6.3.5-dev                          ]',
          '+ -- --=[ 2294 exploits - 1201 auxiliary - 409 post       ]',
          '+ -- --=[ 968 payloads - 45 encoders - 11 nops            ]',
          '+ -- --=[ 9 evasion                                       ]',
          '',
          'msf6 > use exploit/multi/handler',
          '[*] Using configured payload generic/shell_reverse_tcp',
          'msf6 exploit(multi/handler) > set PAYLOAD windows/x64/meterpreter/reverse_tcp',
          'PAYLOAD => windows/x64/meterpreter/reverse_tcp',
          'msf6 exploit(multi/handler) > set LHOST 10.10.14.5',
          'LHOST => 10.10.14.5',
          'msf6 exploit(multi/handler) > exploit',
          '[*] Started reverse TCP handler on 10.10.14.5:4444 ',
          '[*] Sending stage (200774 bytes) to 10.10.10.15',
          '[*] Meterpreter session 1 opened (10.10.14.5:4444 -> 10.10.10.15:49156)',
          '',
          'meterpreter > getuid',
          'Server username: NT AUTHORITY\\SYSTEM'
        ], 200);
        break;
      case 'sqlmap':
        if (args.length === 0) {
          setHistory(prev => [...prev, { type: 'output', text: 'sqlmap: missing URL argument. Usage: sqlmap -u <url>' }]);
        } else {
          await simulateOutput([
            '        ___',
            '       __H__',
            ' ___ ___[)]_____ ___ ___  {1.7.2#stable}',
            '|_ -| . [,]     | . | . |',
            '|___|_  [.]_|_|_|___|  _|',
            '      |_|V...       |_|   https://sqlmap.org',
            '',
            '[*] starting @ ' + new Date().toLocaleTimeString(),
            '[INFO] testing connection to the target URL',
            '[INFO] checking if the target is protected by some kind of WAF/IPS',
            '[INFO] testing if the target URL content is stable',
            '[INFO] target URL content is stable',
            '[INFO] testing if GET parameter \'id\' is dynamic',
            '[INFO] GET parameter \'id\' appears to be dynamic',
            '[INFO] heuristic (basic) test shows that GET parameter \'id\' might be injectable (possible DBMS: \'MySQL\')',
            '[INFO] testing for SQL injection on GET parameter \'id\'',
            '[INFO] GET parameter \'id\' appears to be \'MySQL >= 5.0.12 AND time-based blind (query SLEEP)\' injectable',
            '[INFO] the back-end DBMS is MySQL',
            'web server operating system: Linux Ubuntu',
            'web application technology: Apache 2.4.41, PHP 7.4.3',
            'back-end DBMS: MySQL >= 5.0.12',
            '[INFO] fetched data logged to text files under \'/root/.local/share/sqlmap/output/\''
          ], 150);
        }
        break;
      case 'dirb':
        if (args.length === 0) {
          setHistory(prev => [...prev, { type: 'output', text: 'dirb: missing URL argument. Usage: dirb <url>' }]);
        } else {
          const target = args[0];
          await simulateOutput([
            '-----------------',
            'DIRB v2.22',
            'By The Dark Raver',
            '-----------------',
            '',
            `START_TIME: ${new Date().toString()}`,
            `URL_BASE: ${target}`,
            'WORDLIST_FILES: /usr/share/dirb/wordlists/common.txt',
            '',
            '-----------------',
            'GENERATED WORDS: 4612',
            '',
            '---- Scanning URL: ' + target + ' ----',
            '==> DIRECTORY: ' + target + '/admin/',
            '+ ' + target + '/cgi-bin/ (CODE:403|SIZE:277)',
            '==> DIRECTORY: ' + target + '/css/',
            '+ ' + target + '/index.html (CODE:200|SIZE:11321)',
            '==> DIRECTORY: ' + target + '/js/',
            '+ ' + target + '/robots.txt (CODE:200|SIZE:42)',
            '+ ' + target + '/server-status (CODE:403|SIZE:277)',
            '',
            '-----------------',
            'END_TIME: ' + new Date().toString(),
            'DOWNLOADED: 4612 - FOUND: 3'
          ], 100);
        }
        break;
      default:
        setHistory(prev => [...prev, { type: 'output', text: `bash: ${baseCmd}: command not found` }]);
    }
  };

  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="relative py-24 bg-[#050000] border-y border-red-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black/90 rounded-xl overflow-hidden border border-red-900/50 shadow-[0_0_40px_rgba(255,0,0,0.15)]"
        >
          {/* Terminal Header */}
          <div className="bg-[#0a0000] px-4 py-3 flex items-center justify-between border-b border-red-900/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <span className="ml-4 font-mono text-xs text-gray-500 flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-red-600" /> root@safari-mainframe
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 bg-[#050000] h-[500px] overflow-y-auto font-mono text-sm" onClick={() => document.getElementById('terminal-input')?.focus()}>
            {history.map((line, i) => (
              <div key={i} className={`mb-2 whitespace-pre-wrap ${line.type === 'input' ? 'text-red-500' : 'text-gray-300'}`}>
                {line.text}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center mt-2">
              <span className="text-red-600 mr-2">root@safari:~#</span>
              <input 
                id="terminal-input"
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isProcessing}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono disabled:opacity-50"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={endOfTerminalRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
