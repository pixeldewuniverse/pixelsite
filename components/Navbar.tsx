'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { items } = useCart();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-pixelBg/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-pixel text-xs text-neonBlue">
          PixelDew
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/#packages" className="hover:text-neonBlue">
            Packages
          </Link>
          <Link href="/checkout" className="hover:text-neonPurple">
            Cart ({items.length})
          </Link>
          <Link href="/dashboard/orders" className="hover:text-neonGold">
            Dashboard
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
