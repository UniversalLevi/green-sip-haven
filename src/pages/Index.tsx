
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Subscription from "@/components/Subscription";
import PurchaseInfo from "@/components/PurchaseInfo";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <Hero />
      <Benefits />
      <Subscription />
      <PurchaseInfo />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
