import PackageCard from '@/components/PackageCard';
import { studioPackages } from '@/lib/packages';

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-pixel text-center text-xl text-neonPurple">Choose Your Package</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {studioPackages.map((pack) => (
          <PackageCard key={pack.id} pack={pack} />
        ))}
      </div>
    </section>
  );
}
