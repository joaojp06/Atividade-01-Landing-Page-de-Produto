import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Problem from "./sections/Problem/Problem";
import ProductShowcase from "./sections/ProductShowcase/ProductShowcase";
import Features from "./sections/Features/Features";
import Technology from "./sections/Technology/Technology";
import DailyMoments from "./sections/DailyMoments/DailyMoments";
import Colors from "./sections/Colors/Colors";
import Reviews from "./sections/Reviews/Reviews";
import Pricing from "./sections/Pricing/Pricing";
import FAQSection from "./sections/FAQSection/FAQSection";
import FinalCTA from "./sections/FinalCTA/FinalCTA";
import Footer from "./sections/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ProductShowcase />
        <Features />
        <Technology />
        <DailyMoments />
        <Colors />
        <Reviews />
        <Pricing />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
