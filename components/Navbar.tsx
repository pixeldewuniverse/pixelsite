'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-pixelBg/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-pixel text-xs text-neonBlue">
          PixelDew
        </Link>
        <div className="flex items-center gap-5 text-sm text-white/80">
          <Link href="/pricing" className="hover:text-neonBlue">
            Pricing
          </Link>
          <Link href="/checkout" className="hover:text-neonPurple">
            Checkout
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
