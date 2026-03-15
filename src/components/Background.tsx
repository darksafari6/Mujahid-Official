import React, { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    interface Candle {
      x: number;
      open: number;
      close: number;
      high: number;
      low: number;
      width: number;
    }

    let candles: Candle[] = [];
    const candleWidth = 12;
    const spacing = 8;
    const totalWidth = candleWidth + spacing;
    let offset = 0;

    // Initialize candles
    const initCandles = () => {
      const count = Math.ceil(window.innerWidth / totalWidth) + 10;
      let lastClose = window.innerHeight / 2;
      
      for (let i = 0; i < count; i++) {
        const change = (Math.random() - 0.5) * 100;
        const open = lastClose;
        const close = open + change;
        const high = Math.max(open, close) + Math.random() * 20;
        const low = Math.min(open, close) - Math.random() * 20;
        
        candles.push({
          x: i * totalWidth,
          open,
          close,
          high,
          low,
          width: candleWidth
        });
        lastClose = close;
      }
    };

    initCandles();

    let frameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle grid
      ctx.strokeStyle = 'rgba(0, 242, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      offset -= 0.5; // Scroll speed
      if (Math.abs(offset) >= totalWidth) {
        offset = 0;
        const lastCandle = candles[candles.length - 1];
        const change = (Math.random() - 0.5) * 100;
        const open = lastCandle.close;
        const close = open + change;
        
        // Keep candles within vertical bounds
        const boundedClose = Math.max(100, Math.min(canvas.height - 100, close));
        const finalClose = boundedClose;
        
        const high = Math.max(open, finalClose) + Math.random() * 20;
        const low = Math.min(open, finalClose) - Math.random() * 20;

        candles.shift();
        candles.push({
          x: lastCandle.x + totalWidth,
          open,
          close: finalClose,
          high,
          low,
          width: candleWidth
        });
        
        // Adjust all x positions
        candles.forEach((c, i) => {
          c.x = i * totalWidth;
        });
      }

      candles.forEach((candle) => {
        const isUp = candle.close > candle.open;
        const color = isUp ? 'rgba(0, 255, 157, 0.3)' : 'rgba(255, 68, 68, 0.3)';
        const glowColor = isUp ? 'rgba(0, 255, 157, 0.1)' : 'rgba(255, 68, 68, 0.1)';

        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        
        // Draw wick
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(candle.x + offset + candle.width / 2, candle.high);
        ctx.lineTo(candle.x + offset + candle.width / 2, candle.low);
        ctx.stroke();

        // Draw body
        ctx.fillStyle = color;
        const bodyY = Math.min(candle.open, candle.close);
        const bodyHeight = Math.abs(candle.close - candle.open) || 1;
        ctx.fillRect(candle.x + offset, bodyY, candle.width, bodyHeight);
        
        ctx.shadowBlur = 0;
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-2] bg-[#00040a]"
      />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-gradient-to-b from-cyan-900/10 via-transparent to-blue-900/10 opacity-50"></div>
      <div className="cyber-grid fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-[0.05]"></div>
    </>
  );
}
