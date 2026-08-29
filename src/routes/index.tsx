import { createFileRoute } from "@tanstack/react-router";
import { Navbar, TopBar, WhatsAppButton } from "@/components/site/Navigation";
import { Hero, StatsBar } from "@/components/site/Hero";
import { About, Services, WhyChoose, Process } from "@/components/site/Content";
import { SolarCalculator } from "@/components/site/SolarCalculator";
import { Packages, Projects, Reviews } from "@/components/site/Showcase";
import { Blog, Faq } from "@/components/site/Insights";
import { Contact, Footer } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "H & A Energy Service | Solar Panel Installation in Wazirabad" },
      {
        name: "description",
        content:
          "H & A Energy Servic installs tier-1 solar systems for homes, farms and industries in Wazirabad and Punjab. Free survey, net-metering support, 25-year warranty.",
      },
      { property: "og:title", content: "H & A Energy Service | Solar Panel Installation in Wazirabad" },
      {
        property: "og:description",
        content:
          "H & A Energy Servic installs tier-1 solar systems for homes, farms and industries in Wazirabad and Punjab. Free survey, net-metering support, 25-year warranty.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <SolarCalculator />
        <WhyChoose />
        <Process />
        <Packages />
        <Projects />
        <Reviews />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
