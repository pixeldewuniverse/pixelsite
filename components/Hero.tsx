'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const particles = Array.from({ length: 22 }, (_, i) => i);

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:22px_22px] opacity-30" />
      {particles.map((particle) => (
        <motion.span
          key={particle}
          className="absolute block h-1.5 w-1.5 rounded-sm bg-neonBlue/70"
          initial={{ x: `${(particle * 59) % 100}%`, y: '100%', opacity: 0 }}
          animate={{ y: '-10%', opacity: [0, 0.7, 0] }}
          transition={{ repeat: Infinity, duration: 8 + (particle % 4), delay: particle * 0.2 }}
        />
      ))}
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <p className="mb-3 text-neonGold">Digital Studio • Retro Future</p>
          <h1 className="font-pixel text-2xl leading-relaxed text-neonBlue md:text-3xl">
            Build Your Website Like a Pixel Hero
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Landing pages, business websites, and full-stack web apps ready in days.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/checkout" className="pixel-btn shadow-neon">
              <span>Start Your Project</span>
            </Link>
            <Link href="/#packages" className="pixel-btn border-neonPurple/80">
              <span>View Packages</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="pixel-glass relative flex min-h-72 items-center justify-center rounded-2xl shadow-glass"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative rounded-xl border border-neonPurple/70 bg-gradient-to-b from-neonPurple/20 to-neonBlue/10 p-8"
          >
            <p className="font-pixel text-xs text-neonGold">Dewbit</p>
            <div className="mt-4 grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="h-4 w-4 rounded-sm bg-neonBlue/80" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
