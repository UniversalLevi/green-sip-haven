
import { Check } from "lucide-react";

const plans = [
  {
    name: "Weekly Plan",
    price: "29.99",
    description: "Perfect for daily consumption",
    features: [
      "5 bottles per week",
      "Free delivery",
      "Fresh juice daily",
      "Premium glass bottle",
      "Flexible delivery schedule",
    ],
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
    ],
    featured: true,
  },
];

const Subscription = () => {
  return (
    <section className="py-24" id="subscribe">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600">
            Select a subscription plan that works best for your healthy lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all ${
                plan.featured
                  ? "bg-primary text-white scale-105 shadow-xl"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.featured ? "text-white/80" : "text-gray-600"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.featured ? "text-white/80" : "text-gray-600"}>
                  /month
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 ${
                        plan.featured ? "text-white" : "text-primary"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full transition-colors ${
                  plan.featured
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary-hover"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
