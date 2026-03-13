'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const particles = Array.from({ length: 24 }, (_, i) => i);

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:22px_22px] opacity-25" />
      {particles.map((particle) => (
        <motion.span
          key={particle}
          className="absolute h-1.5 w-1.5 rounded-[2px] bg-neonBlue/70"
          initial={{ x: `${(particle * 37) % 100}%`, y: '110%', opacity: 0 }}
          animate={{ y: '-12%', opacity: [0, 0.8, 0] }}
          transition={{ duration: 7 + (particle % 5), repeat: Infinity, delay: particle * 0.18 }}
        />
      ))}

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-2xl leading-relaxed text-neonBlue md:text-3xl"
        >
          Build Your Website Like a Pixel Hero
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          Landing pages, business websites, and full-stack web apps ready in days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link href="/pricing" className="pixel-btn shadow-neon">
            <span>View Packages</span>
          </Link>
          <Link href="/checkout" className="pixel-btn border-neonPurple/80">
            <span>Start Your Project</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
