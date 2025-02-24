
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
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-slate-700" />
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
