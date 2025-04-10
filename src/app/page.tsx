import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-github-deepblue">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
