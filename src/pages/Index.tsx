
import { useTheme } from "next-themes";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Subscription from "@/components/Subscription";
import PurchaseInfo from "@/components/PurchaseInfo";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Sun, Moon } from "lucide-react";

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors z-50"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6 text-primary" />
        ) : (
          <Moon className="h-6 w-6 text-primary" />
        )}
      </button>
      <Header />
      <Hero />
      <Benefits />
      <Subscription />
      <PurchaseInfo />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
