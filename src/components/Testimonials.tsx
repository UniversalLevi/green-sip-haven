
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Trainer",
    content: "I've been subscribed for 6 months and the quality is consistently amazing. My clients love it too!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    name: "Michael Chen",
    role: "Health Enthusiast",
    content: "The subscription service is so convenient, and the juices are incredibly fresh. Best decision for my health!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    name: "Emma Wilson",
    role: "Yoga Instructor",
    content: "These juices are a perfect complement to my yoga practice. The freshness and quality are unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who've made GreenSip part of their
            healthy lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
              </div>

              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
