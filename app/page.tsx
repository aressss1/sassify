import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ClientBanner from "@/components/client-banner";
import Services from "@/components/services";
import Section1 from "@/components/section-1";
import Section2 from "@/components/section-2";
import ReviewSection from "@/components/review-section";

export default function Home() {
  return (
    <>
      <div className="lg:bg-[url('/bg-image.png')] lg:h-[72rem] " >
        <Navbar />
        <HeroSection />
      </div>
      <ClientBanner />
      <Services />
      <Section1 />
      <Section2 />
      <ReviewSection />
    </>
  )
}
