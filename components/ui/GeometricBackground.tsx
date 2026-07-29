'use client';

import React, { useMemo } from 'react';

export default function GeometricBackground() {
  // Generate a deterministic grid of geometric shapes (circle, square, triangle) matching Image 1
  const gridItems = useMemo(() => {
    const cols = 24;
    const rows = 30;
    const items = [];
    
    // Seeded pseudo-random generator for consistent server/client rendering
    let seed = 42;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const shapes = ['circle', 'square', 'triangle', 'circle', 'square', 'triangle', 'blank'];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const shapeType = shapes[Math.floor(random() * shapes.length)];
        const opacity = (random() * 0.5 + 0.35).toFixed(2); // Soft opacity like Image 1
        items.push({
          id: `${r}-${c}`,
          cx: c * 50 + 25,
          cy: r * 50 + 25,
          shape: shapeType,
          opacity,
        });
      }
    }
    return items;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <svg
        className="w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="geometric-shapes-pattern"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Pattern unit fallback or repeat if needed */}
          </pattern>
        </defs>

        <g>
          {gridItems.map((item) => {
            const { id, cx, cy, shape, opacity } = item;
            const size = 11;
            const half = size / 2;

            if (shape === 'circle') {
              return (
                <circle
                  key={id}
                  cx={cx}
                  cy={cy}
                  r={half}
                  fill="#FFFFFF"
                  style={{ opacity: Number(opacity) }}
                />
              );
            }
            if (shape === 'square') {
              return (
                <rect
                  key={id}
                  x={cx - half}
                  y={cy - half}
                  width={size}
                  height={size}
                  rx={1}
                  fill="#FFFFFF"
                  style={{ opacity: Number(opacity) }}
                />
              );
            }
            if (shape === 'triangle') {
              const p1 = `${cx},${cy - half - 1}`;
              const p2 = `${cx - half - 1},${cy + half}`;
              const p3 = `${cx + half + 1},${cy + half}`;
              return (
                <polygon
                  key={id}
                  points={`${p1} ${p2} ${p3}`}
                  fill="#FFFFFF"
                  style={{ opacity: Number(opacity) }}
                />
              );
            }
            return null;
          })}
        </g>
      </svg>
    </div>
  );
}
