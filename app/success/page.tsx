import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { stripe } from '@/lib/stripe';

type SuccessProps = {
  searchParams: {
    session_id?: string;
  };
};

export default async function SuccessPage({ searchParams }: SuccessProps) {
  const sessionId = searchParams.session_id;
  const session = sessionId
    ? await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items.data.price.product']
      })
    : null;

  const packageName = session?.line_items?.data?.[0]?.description ?? 'Unknown Package';

  return (
    <main>
      <Navbar />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <h1 className="font-pixel text-lg text-neonBlue">Your Pixel Project Has Started</h1>
          <p className="mt-5 text-white/80">Order ID: {session?.id ?? 'N/A'}</p>
          <p className="mt-2 text-white/80">Package name: {packageName}</p>
          <p className="mt-2 text-white/80">Payment status: {session?.payment_status ?? 'unpaid'}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
