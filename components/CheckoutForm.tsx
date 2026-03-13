'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function CheckoutForm() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setLoading(true);
    const response = await fetch('/api/create-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        projectDescription: formData.get('projectDescription'),
        items,
        total
      })
    });

    const data = await response.json();
    if (response.ok && data.redirect_url) {
      clearCart();
      window.location.href = data.redirect_url;
      return;
    }

    setLoading(false);
    router.push(`/success?order_id=${data.order_id ?? 'LOCAL-' + Date.now()}&package=${items.map((i) => i.name).join(', ')}`);
  };

  return (
    <form onSubmit={handleSubmit} className="pixel-glass rounded-2xl p-6">
      <div className="grid gap-4">
        <input name="name" required placeholder="Name" className="rounded-md border border-white/15 bg-white/5 p-3" />
        <input name="email" type="email" required placeholder="Email" className="rounded-md border border-white/15 bg-white/5 p-3" />
        <input name="phone" required placeholder="Phone" className="rounded-md border border-white/15 bg-white/5 p-3" />
        <textarea
          name="projectDescription"
          required
          rows={4}
          placeholder="Project description"
          className="rounded-md border border-white/15 bg-white/5 p-3"
        />
      </div>
      <button type="submit" className="pixel-btn mt-6 w-full disabled:opacity-40" disabled={loading || !items.length}>
        <span>{loading ? 'Processing...' : `Checkout • $${total}`}</span>
      </button>
    </form>
  );
}
