import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import { gdgColors } from "../../theme";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  shape: "circle" | "ring" | "cross" | "codeBracket";
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const BRAND_COLORS = [
  gdgColors.blue,
  gdgColors.red,
  gdgColors.yellow,
  gdgColors.green,
];

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, radius: 140 };

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width || window.innerWidth;
      height = rect?.height || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 18000), 55);
      particles = [];
      const shapes: Array<Particle["shape"]> = [
        "circle",
        "circle",
        "ring",
        "cross",
        "codeBracket",
      ];

      for (let i = 0; i < count; i++) {
        const color = BRAND_COLORS[i % BRAND_COLORS.length];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const speed = 0.25 + Math.random() * 0.45;
        const angle = Math.random() * Math.PI * 2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: shape === "circle" ? 2.5 + Math.random() * 3 : 5 + Math.random() * 5,
          color,
          shape,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    handleResize();

    const drawParticle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      const pulse = 1 + Math.sin(p.pulsePhase) * 0.2;
      const r = p.radius * pulse;

      ctx.fillStyle = p.color;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1.8;

      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === "ring") {
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.shape === "cross") {
        ctx.beginPath();
        ctx.moveTo(-r, 0);
        ctx.lineTo(r, 0);
        ctx.moveTo(0, -r);
        ctx.lineTo(0, r);
        ctx.stroke();
      } else if (p.shape === "codeBracket") {
        // Tech angle bracket </>
        ctx.beginPath();
        ctx.moveTo(r * 0.5, -r * 0.8);
        ctx.lineTo(-r * 0.5, 0);
        ctx.lineTo(r * 0.5, r * 0.8);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles with delicate constellation lines
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.22 : 0.16);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Interactive mouse lines
      if (mouse.x > 0 && mouse.y > 0) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Update and draw particles
      for (const p of particles) {
        // Gentle cursor push-away force
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 2.5;
          p.y += (dy / dist) * force * 2.5;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.pulsePhase += p.pulseSpeed;

        // Wrap around boundaries smoothly
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;

        ctx.globalAlpha = isDark ? 0.75 : 0.65;
        drawParticle(p);
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDark]);

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Dynamic Animated Aurora Gradient Mesh in GDG Colors */}
      <Box
        sx={{
          position: "absolute",
          inset: "-20%",
          width: "140%",
          height: "140%",
          background: isDark
            ? `radial-gradient(ellipse at 15% 20%, rgba(66, 133, 244, 0.35) 0%, transparent 45%),
               radial-gradient(ellipse at 85% 25%, rgba(52, 168, 83, 0.32) 0%, transparent 45%),
               radial-gradient(ellipse at 35% 80%, rgba(249, 171, 0, 0.28) 0%, transparent 45%),
               radial-gradient(ellipse at 80% 85%, rgba(234, 67, 53, 0.26) 0%, transparent 45%)`
            : `radial-gradient(ellipse at 15% 20%, rgba(66, 133, 244, 0.22) 0%, transparent 45%),
               radial-gradient(ellipse at 85% 25%, rgba(52, 168, 83, 0.20) 0%, transparent 45%),
               radial-gradient(ellipse at 35% 80%, rgba(249, 171, 0, 0.18) 0%, transparent 45%),
               radial-gradient(ellipse at 80% 85%, rgba(234, 67, 53, 0.17) 0%, transparent 45%)`,
          filter: "blur(60px)",
          animation: "auroraPulse 18s ease-in-out infinite alternate",
          "@keyframes auroraPulse": {
            "0%": {
              transform: "scale(1) rotate(0deg) translate(0px, 0px)",
            },
            "50%": {
              transform: "scale(1.12) rotate(4deg) translate(-25px, 20px)",
            },
            "100%": {
              transform: "scale(0.96) rotate(-3deg) translate(25px, -20px)",
            },
          },
        }}
      />

      {/* Cyber Grid Matrix with Floating Scan-line */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.1) 1.2px, transparent 1.2px)"
            : "radial-gradient(rgba(66, 133, 244, 0.13) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 45%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 45%, transparent 90%)",
        }}
      />

      {/* Moving Tech Glow Sweep Beam */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-50%",
          width: "200%",
          height: "100%",
          background: `linear-gradient(115deg, transparent 40%, rgba(66, 133, 244, 0.08) 50%, rgba(52, 168, 83, 0.08) 53%, transparent 63%)`,
          animation: "beamSweep 10s linear infinite",
          "@keyframes beamSweep": {
            "0%": { transform: "translateX(-40%)" },
            "100%": { transform: "translateX(40%)" },
          },
        }}
      />

      {/* Interactive HTML5 Canvas: Tech Constellations & Floating Code Symbols */}
      <Box
        component="canvas"
        ref={canvasRef}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </Box>
  );
}
