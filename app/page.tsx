import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";
import QuickStats from "@/components/QuickStats/QuickStats";
import CoreServices from "@/components/CoreServices/CoreServices";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <QuickStats />
        <Partners />
        <CoreServices />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  );
}
