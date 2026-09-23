import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FlagshipProject from "@/components/FlagshipProject";
import SelectedWork from "@/components/SelectedWork";
import RecentPlatforms from "@/components/RecentPlatforms";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <FlagshipProject />
        <SelectedWork />
        <RecentPlatforms />
        <Capabilities />
        <Experience />
      </main>
      <CtaFooter />
    </>
  );
}
