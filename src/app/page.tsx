import Navbar from "@/components/Navbar";
import ClientSection from "@/components/sections/ClientSection";
import CommunitySection from "@/components/sections/CommunitySection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <ClientSection/>
    <CommunitySection/>
   </div>
  );
}
