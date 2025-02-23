
import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="text-2xl font-semibold text-primary">
            GreenSip
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {["About", "Subscribe", "Products", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-4 space-y-4">
              {["About", "Subscribe", "Products", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
