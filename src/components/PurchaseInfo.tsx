
import { Recycle, Store, DollarSign } from "lucide-react";

const PurchaseInfo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            In-Store Purchase & Bottle Policy
          </h2>
          <p className="text-muted-foreground">
            Visit our store for direct purchases and learn about our eco-friendly bottle policy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Store className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  In-Store Pricing
                </h3>
                <p className="text-muted-foreground">
                  Save up to 20% on direct purchases at our store locations compared to
                  delivery prices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Bottle Deposit System
                </h3>
                <p className="text-muted-foreground">
                  $5 refundable deposit per bottle. Return clean bottles to get your
                  deposit back or exchange for your next purchase.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Loyalty Rewards
                </h3>
                <p className="text-muted-foreground">
                  Earn points on every in-store purchase. Redeem for free juices or
                  merchandise.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
              alt="Store interior"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseInfo;
