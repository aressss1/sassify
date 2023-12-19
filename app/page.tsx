import HeroSection from "@/components/hero-section";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/bg-image.png')] h-[72rem]" >
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}
