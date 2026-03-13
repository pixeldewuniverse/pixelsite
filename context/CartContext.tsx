'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type PackageItem = {
  id: string;
  name: string;
  price: number;
  features: string[];
};

type CartContextValue = {
  items: PackageItem[];
  addToCart: (item: PackageItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<PackageItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('pixeldew-cart');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pixeldew-cart', JSON.stringify(items));
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addToCart: (item: PackageItem) => setItems((prev) => [...prev, item]),
      removeFromCart: (id: string) => setItems((prev) => prev.filter((item) => item.id !== id)),
      clearCart: () => setItems([]),
      total: items.reduce((sum, item) => sum + item.price, 0)
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return context;
}
