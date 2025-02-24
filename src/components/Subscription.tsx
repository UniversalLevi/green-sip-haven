
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "19.99",
    description: "Perfect for beginners",
    features: [
      "3 bottles per week",
      "Standard delivery",
      "Fresh juice daily",
      "Glass bottle included",
      "Basic delivery schedule",
    ],
  },
  {
    name: "Weekly Plan",
    price: "29.99",
    description: "Most popular choice",
    features: [
      "5 bottles per week",
      "Free priority delivery",
      "Fresh juice daily",
      "Premium glass bottle",
      "Flexible delivery schedule",
      "Basic member benefits",
    ],
    featured: true,
  },
  {
    name: "Monthly Plan",
    price: "99.99",
    description: "Best value for juice lovers",
    features: [
      "20 bottles per month",
      "Priority delivery",
      "Fresh juice daily",
      "Premium glass bottle",
      "Flexible delivery schedule",
      "10% discount on additional orders",
      "Premium member benefits",
    ],
  },
  {
    name: "Family Plan",
    price: "159.99",
    description: "Perfect for families",
    features: [
      "40 bottles per month",
      "Priority delivery",
      "Fresh juice daily",
      "Premium glass bottles",
      "Custom delivery schedule",
      "15% discount on additional orders",
      "Premium member benefits",
      "Family size portions",
    ],
  },
];

const Subscription = () => {
  const handleSubscribe = (planName: string) => {
    console.log(`Subscribing to ${planName}`);
    alert(`Thank you for choosing the ${planName}! We'll redirect you to payment soon.`);
  };

  return (
    <section className="py-24" id="subscribe">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground">
            Select a subscription plan that works best for your healthy lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 fade-in-up ${
                plan.featured
                  ? "bg-primary text-primary-foreground scale-105 shadow-xl"
                  : "bg-background border border-border"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  /month
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 ${
                        plan.featured ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative overflow-hidden rounded-full">
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full py-3 text-center transition-all duration-300 hover:scale-105 ${
                    plan.featured
                      ? "bg-background text-primary hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
