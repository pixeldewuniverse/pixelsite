import Navbar from '@/components/Navbar';

const orders = [
  { id: 'PD-1201', customer: 'Ari Putra', package: 'Starter Pack', status: 'Paid', date: '2026-01-10' },
  { id: 'PD-1202', customer: 'Luna Corp', package: 'Business Pack', status: 'Pending', date: '2026-01-12' },
  { id: 'PD-1203', customer: 'Nova Labs', package: 'Pro Pack', status: 'Paid', date: '2026-01-13' }
];

export default function OrdersDashboardPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="font-pixel text-lg text-neonGold">Orders Dashboard</h1>
        <div className="pixel-glass mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/10 text-white/70">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Package</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-white/5">
                  <td className="px-4 py-3">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.package}</td>
                  <td className="px-4 py-3">{order.status}</td>
                  <td className="px-4 py-3">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
