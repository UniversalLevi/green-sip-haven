
import { ChevronRight, Sparkles, Clock, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              New: Monthly Subscription Available
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Nature in <br />
              Every Sip
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Experience the pure essence of organic herbs in our handcrafted green juice.
              Fresh, healthy, and delivered to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
                Subscribe Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">100% Organic</h3>
                  <p className="text-sm text-gray-600">Pure ingredients only</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Daily Fresh</h3>
                  <p className="text-sm text-gray-600">Made every morning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-down md:animate-float">
            <img
              src="/placeholder.svg"
              alt="Green juice bottle"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
