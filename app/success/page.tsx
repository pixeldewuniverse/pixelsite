import Navbar from '@/components/Navbar';
import OrderSuccess from '@/components/OrderSuccess';

export default function SuccessPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 py-16">
        <OrderSuccess />
      </section>
    </main>
  );
}
