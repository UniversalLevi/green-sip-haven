import { ChevronRight, Sparkles, Clock, Leaf, Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/30" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              New: Monthly Subscription Available
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
              Nature in <br />
              Every Sip
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Experience the pure essence of organic herbs in our handcrafted green juice.
              Fresh, healthy, and delivered to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#subscribe" 
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Subscribe Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#benefits"
                className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">100% Organic</h3>
                  <p className="text-sm text-muted-foreground">Pure ingredients only</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Daily Fresh</h3>
                  <p className="text-sm text-muted-foreground">Made every morning</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">Certified processes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Premium Service</h3>
                  <p className="text-sm text-muted-foreground">5-star rated</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-float" style={{ animationDuration: '6s' }}>
            <img
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
              alt="Green juice bottles in natural setting"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
