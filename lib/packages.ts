export type StudioPackage = {
  id: string;
  name: string;
  price: number;
  features: string[];
};

export const studioPackages: StudioPackage[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    price: 99,
    features: ['1 landing page', 'mobile responsive', 'basic SEO', 'delivery in 3 days']
  },
  {
    id: 'business',
    name: 'Business Pack',
    price: 299,
    features: ['5 pages website', 'CMS integration', 'SEO optimization', 'delivery in 5 days']
  },
  {
    id: 'pro',
    name: 'Pro Pack',
    price: 699,
    features: ['full website', 'payment gateway integration', 'admin dashboard', 'advanced SEO']
  }
];
