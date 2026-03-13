import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import CheckoutForm from '@/components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-2">
        <div>
          <h1 className="font-pixel text-lg text-neonPurple">Your Cart</h1>
          <div className="mt-6">
            <Cart />
          </div>
        </div>
        <div>
          <h2 className="font-pixel text-lg text-neonBlue">Checkout</h2>
          <div className="mt-6">
            <CheckoutForm />
          </div>
        </div>
      </section>
    </main>
  );
}
