
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="fade-in-up" style={{ animationDelay: '0ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">About GreenSip</h3>
            <p className="text-muted-foreground">
              Bringing nature's freshness to your doorstep with our premium organic juice delivery service.
            </p>
          </div>
          
          <div className="fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <span className="hover:translate-x-1 transition-transform">Home</span>
                </a>
              </li>
              <li>
                <a href="#subscribe" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <span className="hover:translate-x-1 transition-transform">Subscribe</span>
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <span className="hover:translate-x-1 transition-transform">Benefits</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground group hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                123 Green Street, HC 12345
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group hover:text-primary transition-colors">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group hover:text-primary transition-colors">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                hello@greensip.com
              </li>
            </ul>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground fade-in-up" style={{ animationDelay: '400ms' }}>
            &copy; {new Date().getFullYear()} GreenSip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
