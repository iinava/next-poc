import Navbar from "@/components/Navbar";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CalenderSection from "@/components/sections/CalenderSection";
import ClientSection from "@/components/sections/ClientSection";
import CommunitySection from "@/components/sections/CommunitySection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MarketingSection from "@/components/sections/MarketingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import UnlockSection from "@/components/sections/UnlockSection";

export default function Home() {
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <ClientSection/>
    <CommunitySection/>
    <UnlockSection/>
    <AchievementsSection/>
    <CalenderSection/>
    <TestimonialSection/>
    <MarketingSection/>
    <FooterSection/>
   </>
  );
}
