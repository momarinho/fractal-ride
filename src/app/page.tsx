import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </main>
  );
}
