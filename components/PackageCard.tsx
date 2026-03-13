'use client';

import { motion } from 'framer-motion';
import type { StudioPackage } from '@/lib/packages';

type Props = {
  pack: StudioPackage;
};

export default function PackageCard({ pack }: Props) {
  const buyNow = async () => {
    const response = await fetch('/api/stripe/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ packageName: pack.name, price: pack.price * 100 })
    });

    const data = await response.json();
    if (response.ok && data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <motion.article
      whileHover={{ scale: 1.05, y: -6 }}
      className="rounded-xl border border-purple-500/20 bg-black/40 p-6 backdrop-blur"
    >
      <h3 className="text-xl font-semibold text-neonBlue">{pack.name}</h3>
      <p className="mt-2 text-3xl font-bold text-neonGold">${pack.price}</p>
      <ul className="mt-5 space-y-2 text-sm text-white/80">
        {pack.features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
      <button onClick={buyNow} className="pixel-btn mt-6 w-full transition">
        <span>Buy Now</span>
      </button>
    </motion.article>
  );
}
