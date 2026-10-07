import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandIntro from "./components/BrandIntro";
import ProductsSection from "./components/ProductsSection";
import ServicesSection from "./components/ServicesSection";
import FeaturedProject from "./components/FeaturedProject";
import PortfolioSection from "./components/PortfolioSection";
import WhyXpose from "./components/WhyXpose";
import IndustriesSection from "./components/IndustriesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <BrandIntro />

        <ProductsSection />

        <ServicesSection />

        <FeaturedProject />

        <PortfolioSection />

        <WhyXpose />

        <IndustriesSection />

        <AboutSection />

        <TestimonialsSection />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}