'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Activity, Fingerprint, Sparkles } from 'lucide-react';

interface IdentityFingerprintOrbitProps {
  onOpenWorkflow?: () => void;
}

export default function IdentityFingerprintOrbit({ onOpenWorkflow }: IdentityFingerprintOrbitProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  // Generate parametric fingerprint lines forming a human head profile facing left
  const fingerprintLines = useMemo(() => {
    const lines: Array<{ d: string; strokeWidth: number; dashArray?: string }> = [];
    const cx = 250;
    const cy = 230;
    const totalRings = 40;
    const spacing = 4.2;
    const minRadius = 12;

    // Head profile boundary function R(theta) in polar coordinates relative to (cx, cy)
    // theta = 0 is Right (back of head), theta = Math.PI is Left (face profile)
    const getHeadRadius = (theta: number) => {
      // Normalize angle to [0, 2*PI]
      let a = theta % (2 * Math.PI);
      if (a < 0) a += 2 * Math.PI;

      // Base radius scale for head
      const baseR = 175;

      // Back of head (Right side: -50 deg to +60 deg -> 0 to PI/3 and 5*PI/3 to 2*PI)
      if (a <= Math.PI / 3 || a >= (5 * Math.PI) / 3) {
        // Rounded back of skull
        return baseR * (0.92 + 0.08 * Math.cos(a));
      }
      // Top of head / Crown (PI/3 to 2*PI/3)
      if (a > Math.PI / 3 && a <= (2 * Math.PI) / 3) {
        return baseR * 0.98;
      }
      // Forehead & Brow (2*PI/3 to 5*PI/6)
      if (a > (2 * Math.PI) / 3 && a <= (5 * Math.PI) / 6) {
        const factor = (a - (2 * Math.PI) / 3) / (Math.PI / 6);
        return baseR * (0.98 - 0.04 * Math.sin(factor * Math.PI));
      }
      // Nose Protrusion (around PI -> ~170 to 195 degrees)
      if (a > (5 * Math.PI) / 6 && a <= (13 * Math.PI) / 12) {
        const noseAngle = (a - (5 * Math.PI) / 6) / (Math.PI / 4);
        // Nose bridge -> tip -> dip
        if (noseAngle < 0.5) {
          // Nose tip extends outwards
          return baseR * (0.94 + 0.16 * Math.sin(noseAngle * Math.PI));
        } else {
          // Nose dip towards upper lip
          return baseR * (1.10 - 0.22 * Math.sin((noseAngle - 0.5) * Math.PI));
        }
      }
      // Mouth & Upper/Lower Lips (13*PI/12 to 15*PI/12)
      if (a > (13 * Math.PI) / 12 && a <= (5 * Math.PI) / 4) {
        const lipAngle = (a - (13 * Math.PI) / 12) / (Math.PI / 6);
        // Slight lip bump
        return baseR * (0.88 + 0.06 * Math.sin(lipAngle * Math.PI * 2));
      }
      // Chin Protrusion (5*PI/4 to 7*PI/5)
      if (a > (5 * Math.PI) / 4 && a <= (7 * Math.PI) / 5) {
        const chinAngle = (a - (5 * Math.PI) / 4) / (Math.PI / 6.6);
        return baseR * (0.88 + 0.12 * Math.sin(chinAngle * Math.PI));
      }
      // Jawline & Neck (7*PI/5 to 5*PI/3)
      if (a > (7 * Math.PI) / 5 && a < (5 * Math.PI) / 3) {
        const neckAngle = (a - (7 * Math.PI) / 5) / (Math.PI / 3.75);
        return baseR * (0.95 - 0.28 * Math.sin(neckAngle * Math.PI));
      }

      return baseR;
    };

    for (let i = 0; i < totalRings; i++) {
      const baseRadius = minRadius + i * spacing;
      const numPoints = 120;
      const pathPoints: Array<[number, number]> = [];

      // Spiral growth factor for realistic fingerprint whorl
      const spiralOffset = (i * 0.15);

      for (let p = 0; p <= numPoints; p++) {
        const angle = (p / numPoints) * 2 * Math.PI + spiralOffset;
        const maxR = getHeadRadius(angle);

        // Calculate radius for this point
        const r = Math.min(baseRadius + (angle / (2 * Math.PI)) * 0.8, maxR);

        // Add subtle wave modulation for organic fingerprint ridge feel
        const wave = Math.sin(angle * 8 + i) * 0.6;
        const finalR = r + wave;

        const x = cx + finalR * Math.cos(angle - Math.PI); // Rotate so face points left
        const y = cy + finalR * Math.sin(angle - Math.PI);

        pathPoints.push([x, y]);
      }

      // Convert points to smooth cubic SVG Bezier curve or polyline path
      if (pathPoints.length > 0) {
        let d = `M ${pathPoints[0][0].toFixed(1)},${pathPoints[0][1].toFixed(1)}`;
        for (let k = 1; k < pathPoints.length - 1; k += 2) {
          const p1 = pathPoints[k];
          const p2 = pathPoints[k + 1] || p1;
          d += ` Q ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
        }

        // Fingerprint ridge breaks/gaps
        const hasDashes = i % 3 === 0 || i % 7 === 0;
        const dashArray = hasDashes
          ? `${(40 + (i * 5) % 60).toFixed(0)} ${(8 + (i * 3) % 12).toFixed(0)} ${(60 + (i * 7) % 80).toFixed(0)} ${(10 + (i * 2) % 15).toFixed(0)}`
          : undefined;

        lines.push({
          d,
          strokeWidth: i % 4 === 0 ? 2.2 : 1.7,
          dashArray
        });
      }
    }

    return lines;
  }, []);

  // Background geometric grid pattern elements
  const gridShapes = useMemo(() => {
    const items = [];
    const cols = 12;
    const rows = 12;
    const types = ['circle', 'triangle', 'square'];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const type = types[(r * cols + c) % 3];
        items.push({ id: `${r}-${c}`, r, c, type });
      }
    }
    return items;
  }, []);

  // Interactive floating signal badges around orbits
  const orbitBadges = [
    {
      id: 'kyc',
      label: 'Biometric Match',
      value: '99.98%',
      icon: ShieldCheck,
      color: 'border-emerald-500/40 text-emerald-700 bg-emerald-50/90',
      pos: 'top-4 left-6 sm:left-10',
    },
    {
      id: 'ai',
      label: 'Actionable AI',
      value: 'Risk 0.02',
      icon: Cpu,
      color: 'border-[#FF5A60]/40 text-[#FF5A60] bg-rose-50/90',
      pos: 'top-12 right-4 sm:right-8',
    },
    {
      id: 'latency',
      label: 'Decision Latency',
      value: '< 38ms',
      icon: Activity,
      color: 'border-indigo-500/40 text-indigo-700 bg-indigo-50/90',
      pos: 'bottom-10 left-8 sm:left-12',
    },
  ];

  return (
    <div
      className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center overflow-hidden rounded-3xl bg-[#F5F4F0]/80 border border-[#E2E0D8] shadow-lg group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Geometric Icon Grid Background (Matching User Image) */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 p-4 opacity-[0.14] pointer-events-none">
        {gridShapes.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            {item.type === 'circle' && (
              <div className="w-2.5 h-2.5 rounded-full bg-[#1C1D21]" />
            )}
            {item.type === 'square' && (
              <div className="w-2.5 h-2.5 bg-[#1C1D21] rounded-[1px]" />
            )}
            {item.type === 'triangle' && (
              <div
                className="w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-b-[8px] border-b-[#1C1D21]"
              />
            )}
          </div>
        ))}
      </div>

      {/* 2. Rotating Orbit Rings & Orbiting Geometric Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Orbit Ring 1 (Inner) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[68%] h-[68%] rounded-full border border-[#1C1D21]/15"
        >
          {/* Orbiting Square */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A8A69E] rounded-[1px] shadow-sm" />
          {/* Orbiting Triangle */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-[#A8A69E]" />
        </motion.div>

        {/* Orbit Ring 2 (Middle) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[84%] h-[84%] rounded-full border border-[#1C1D21]/12"
        >
          {/* Orbiting Circle */}
          <div className="absolute top-1/4 -left-2 w-3.5 h-3.5 bg-[#A8A69E] rounded-full shadow-sm" />
          {/* Orbiting Triangle */}
          <div className="absolute bottom-1/4 -right-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#A8A69E]" />
        </motion.div>

        {/* Orbit Ring 3 (Outer) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[98%] h-[98%] rounded-full border border-[#1C1D21]/10 border-dashed"
        >
          {/* Orbiting Coral Highlight Square */}
          <div className="absolute top-10 right-12 w-3.5 h-3.5 bg-[#FF5A60] rounded-[1px] shadow-sm animate-pulse" />
          {/* Orbiting Dark Circle */}
          <div className="absolute bottom-12 left-10 w-3 h-3 bg-[#1C1D21] rounded-full" />
        </motion.div>
      </div>

      {/* 3. Central Fingerprint Face Contour SVG */}
      <div className="relative z-10 w-[82%] h-[82%] flex items-center justify-center">
        <svg
          viewBox="0 0 500 460"
          className="w-full h-full drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        >
          <defs>
            <linearGradient id="fingerprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C1D21" />
              <stop offset="70%" stopColor="#2D2E35" />
              <stop offset="100%" stopColor="#FF5A60" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render Fingerprint Contour Lines */}
          <g stroke="url(#fingerprintGrad)" fill="none" strokeLinecap="round">
            {fingerprintLines.map((line, idx) => (
              <motion.path
                key={idx}
                d={line.d}
                strokeWidth={line.strokeWidth}
                strokeDasharray={line.dashArray}
                initial={{ pathLength: 0.85, opacity: 0.8 }}
                animate={{
                  pathLength: [0.85, 1, 0.85],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.04,
                }}
              />
            ))}
          </g>

          {/* Interactive Scan Line Sweep on Hover */}
          {isHovered && (
            <motion.line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              stroke="#FF5A60"
              strokeWidth="2"
              filter="url(#glow)"
              opacity="0.8"
              animate={{ y: [40, 420, 40] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </svg>
      </div>

      {/* 4. Floating Interactive Identity Signal Badges */}
      {orbitBadges.map((badge) => {
        const IconComp = badge.icon;
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            onClick={onOpenWorkflow}
            onMouseEnter={() => setActiveBadge(badge.id)}
            onMouseLeave={() => setActiveBadge(null)}
            className={`absolute ${badge.pos} z-20 px-3.5 py-2 rounded-xl border ${badge.color} backdrop-blur-md shadow-md flex items-center gap-2.5 cursor-pointer transition-all duration-300`}
          >
            <div className="p-1 rounded-lg bg-white/80 shadow-2xs">
              <IconComp className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                {badge.label}
              </span>
              <span className="text-xs font-black tracking-tight text-[#1C1D21] mt-0.5">
                {badge.value}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* 5. Bottom Interactive Prompt Overlay */}
      <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-[#1C1D21]/70 bg-white/80 border border-[#E2E0D8] px-3 py-1.5 rounded-full shadow-xs backdrop-blur-xs">
        <Sparkles className="w-3 h-3 text-[#FF5A60] animate-spin" />
        <span>Autonomous Identity Mesh</span>
      </div>
    </div>
  );
}
