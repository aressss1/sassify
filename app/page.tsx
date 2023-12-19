import HeroSection from "@/components/hero-section";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/bg-image.png')] lg:h-[72rem] md:[45rem] " >
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}
