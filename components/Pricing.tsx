'use client';

import { motion } from 'framer-motion';
import { PackageItem, useCart } from '@/context/CartContext';

const packages: PackageItem[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    price: 99,
    features: ['1 Landing page', 'Mobile responsive', 'SEO basic', '3 day delivery']
  },
  {
    id: 'business',
    name: 'Business Pack',
    price: 299,
    features: ['5 pages website', 'CMS integration', 'SEO optimization', '5 day delivery']
  },
  {
    id: 'pro',
    name: 'Pro Pack',
    price: 699,
    features: ['Full website', 'Payment gateway', 'Admin dashboard', 'SEO advanced']
  }
];

const icons = ['🧩', '🚀', '👑'];

export function getPackages() {
  return packages;
}

export default function Pricing() {
  const { addToCart } = useCart();

  return (
    <section id="packages" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-pixel text-center text-xl text-neonPurple">Pixel Packages</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {packages.map((pack, index) => (
          <motion.article
            key={pack.id}
            whileHover={{ y: -8, scale: 1.02 }}
            className="pixel-glass rounded-2xl p-6 shadow-glass"
          >
            <div className="text-2xl">{icons[index]}</div>
            <h3 className="mt-3 text-xl font-semibold text-neonBlue">{pack.name}</h3>
            <p className="mt-1 text-3xl font-bold text-neonGold">${pack.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {pack.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <button onClick={() => addToCart(pack)} className="pixel-btn mt-6 w-full">
              <span>Choose Pack</span>
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
