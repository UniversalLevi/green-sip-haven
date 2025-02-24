
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Have questions about our products or services? We're here to help!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-6 bg-accent rounded-2xl">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-center text-muted-foreground">
                123 Green Street<br />
                Healthy City, HC 12345
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-accent rounded-2xl">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-center text-muted-foreground">
                +1 (555) 123-4567<br />
                Mon-Fri: 9AM-6PM
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-accent rounded-2xl">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-center text-muted-foreground">
                hello@greensip.com<br />
                support@greensip.com
              </p>
            </div>
          </div>

          <div className="bg-accent p-8 rounded-2xl">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
