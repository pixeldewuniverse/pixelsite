'use client';

import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { items, removeFromCart, total } = useCart();

  if (!items.length) {
    return <p className="text-sm text-white/60">No packages selected yet.</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={`${item.id}-${index}`} className="pixel-glass flex items-center justify-between rounded-xl p-4">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-neonGold">${item.price}</p>
          </div>
          <button className="text-sm text-red-300 hover:text-red-200" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <div className="border-t border-white/10 pt-3 text-right text-lg font-semibold">Total: ${total}</div>
    </div>
  );
}
