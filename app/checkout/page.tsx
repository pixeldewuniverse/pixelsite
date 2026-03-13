import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <h1 className="font-pixel text-lg text-neonPurple">Start Your Project</h1>
          <p className="mt-5 text-white/75">
            Select a package first, then you&apos;ll be redirected to Stripe Checkout for secure payment.
          </p>
          <Link href="/pricing" className="pixel-btn mt-8 inline-block">
            <span>Go to Pricing</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
