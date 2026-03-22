import { CtaBanner } from "@/components/landing/cta-banner";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { TestimonialStrip } from "@/components/landing/testimonial-strip";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <FeatureGrid />
      <TestimonialStrip />
      <Pricing />
      <CtaBanner />
    </main>
  );
}
