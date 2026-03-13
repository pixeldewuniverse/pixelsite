'use client';

import { useSearchParams } from 'next/navigation';

export default function OrderSuccess() {
  const params = useSearchParams();

  return (
    <div className="pixel-glass mx-auto max-w-2xl rounded-2xl p-8 text-center">
      <h1 className="font-pixel text-lg text-neonBlue">Your Pixel Project Has Started</h1>
      <p className="mt-5 text-white/80">Order ID: {params.get('order_id') ?? 'Pending confirmation'}</p>
      <p className="mt-2 text-white/80">Package chosen: {params.get('package') ?? 'Custom selection'}</p>
      <p className="mt-6 text-sm text-neonGold">
        Next steps: Our team will contact you within 24 hours to confirm scope, timeline, and kickoff assets.
      </p>
    </div>
  );
}
