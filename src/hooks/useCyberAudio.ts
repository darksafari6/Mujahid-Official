import { useRef, useState, useEffect } from 'react';

export function useCyberAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Deep drone oscillators
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const lfo = ctx.createOscillator();

      osc1.type = 'sine';
      osc1.frequency.value = 65; // Deep bass

      osc2.type = 'triangle';
      osc2.frequency.value = 64.5; // Slight detune for beating effect

      // Lowpass filter to muffle the sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 150;

      // LFO to modulate the filter cutoff (breathing effect)
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 50;
      lfo.frequency.value = 0.15; // Very slow pulse
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // High-pitched subtle digital whine
      const whineOsc = ctx.createOscillator();
      whineOsc.type = 'sine';
      whineOsc.frequency.value = 4000;
      const whineGain = ctx.createGain();
      whineGain.gain.value = 0.01;
      
      const whineLfo = ctx.createOscillator();
      whineLfo.type = 'square';
      whineLfo.frequency.value = 8; // fast data pulse
      const whineLfoGain = ctx.createGain();
      whineLfoGain.gain.value = 0.005;
      whineLfo.connect(whineLfoGain);
      whineLfoGain.connect(whineGain.gain);

      // Main gain node for volume control
      const mainGain = ctx.createGain();
      mainGain.gain.value = 0;
      gainNodeRef.current = mainGain;

      // Connections
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(mainGain);
      
      whineOsc.connect(whineGain);
      whineGain.connect(mainGain);

      mainGain.connect(ctx.destination);

      // Start oscillators
      osc1.start();
      osc2.start();
      lfo.start();
      whineOsc.start();
      whineLfo.start();
    }

    const ctx = audioCtxRef.current;
    const gain = gainNodeRef.current;

    if (ctx && gain) {
      if (isPlaying) {
        // Fade out
        gain.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
        setIsPlaying(false);
      } else {
        // Fade in
        if (ctx.state === 'suspended') {
          ctx.resume();
        }
        gain.gain.setTargetAtTime(0.3, ctx.currentTime, 1);
        setIsPlaying(true);
      }
    }
  };

  return { isPlaying, toggleAudio };
}
