import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 pt-14 text-center">
        <h1 className="font-pixel text-lg text-neonBlue">PixelDew Pricing</h1>
        <p className="mt-3 text-white/75">Pick a package and pay securely with Stripe Checkout.</p>
      </section>
      <Pricing />
      <Footer />
    </main>
  );
}
