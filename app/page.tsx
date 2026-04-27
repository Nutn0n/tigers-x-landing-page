import Hero from "@/components/Hero";
import StickyHeader from "@/components/StickyHeader";
import StorySection from "@/components/StorySection";
import ScienceSection from "@/components/ScienceSection";
import MicrogravitySection from "@/components/MicrogravitySection";
import SystemDesignSection from "@/components/SystemDesignSection";
import ActivePayloadSection from "@/components/ActivePayloadSection";
import NetworkSection from "@/components/NetworkSection";
import SpecificationSection from "@/components/SpecificationSection";
import BuiltInThailandSection from "@/components/BuiltInThailandSection";
import MissionTimeline from "@/components/MissionTimeline";
import LegacySection from "@/components/LegacySection";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip">
      <StickyHeader />
      <Hero />
      <StorySection />
      <ScienceSection />
      <MicrogravitySection />
      <SystemDesignSection />
      <ActivePayloadSection />
      <NetworkSection />
      <SpecificationSection />
      <BuiltInThailandSection />
      <MissionTimeline />
      <LegacySection />
      <ClosingSection />
    </main>
  );
}
