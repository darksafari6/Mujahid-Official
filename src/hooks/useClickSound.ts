import { useCallback } from 'react';

export function useClickSound() {
  const playClick = useCallback(() => {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const now = audioCtx.currentTime;
    
    // Glassy Trading Sound: Clean, high-pitched sine blips
    const playBlip = (freq: number, startTime: number, volume: number) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(volume, startTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + 0.12);
    };

    // Fast double blip for a "trading interface" feel
    playBlip(2200, now, 0.1);
    playBlip(2800, now + 0.05, 0.05);
  }, []);

  return playClick;
}
