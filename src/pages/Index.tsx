
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DynamicPricing from "@/components/DynamicPricing";
import DeveloperAPI from "@/components/DeveloperAPI";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DynamicPricing />
      <DeveloperAPI />
      <Footer />
    </div>
  );
};

export default Index;
