import React, { useEffect, useRef } from 'react';

const CodeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets and symbols
    const codeElements = [
      'const infinity = () => {',
      'while(true) {',
      'console.log("code");',
      '}',
      'function develop() {',
      'return innovation;',
      '}',
      'if (passion) {',
      'create();',
      '}',
      '{ }', '[ ]', '( )', '=>', '===', '!==', '&&', '||',
      '0', '1', 'x', 'y', 'i', 'j', 'n', 'null', 'true', 'false'
    ];

    // Particle system for floating code
    class CodeParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.text = codeElements[Math.floor(Math.random() * codeElements.length)];
        this.size = Math.random() * 14 + 10;
        this.opacity = Math.random() * 0.7 + 0.1;
        
        // Random accent colors
        const colors = [
          'hsl(208, 100%, 60%)', // neon-blue
          'hsl(180, 100%, 50%)', // neon-cyan
          'hsl(120, 100%, 50%)', // neon-green
          'hsl(320, 100%, 60%)', // neon-magenta
          'hsl(25, 100%, 60%)'   // neon-orange
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Pulse opacity
        this.opacity += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.01;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.font = `${this.size}px 'Fira Code', 'Courier New', monospace`;
        ctx.textAlign = 'center';
        
        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    // Create particles
    const particles: CodeParticle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push(new CodeParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default CodeAnimation;