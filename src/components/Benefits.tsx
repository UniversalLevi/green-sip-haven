
import { Heart, Leaf, Droplets, Award } from "lucide-react";

const benefitsData = [
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Packed with essential nutrients and antioxidants for your daily wellbeing",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Sourced from certified organic farms with no artificial additives",
  },
  {
    icon: Droplets,
    title: "Cold Pressed",
    description: "Maximum nutrient retention through careful extraction process",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Strict quality control and freshness guarantee",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Green Juice?
          </h2>
          <p className="text-gray-600">
            Experience the difference of truly natural, freshly pressed juice delivered
            to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
