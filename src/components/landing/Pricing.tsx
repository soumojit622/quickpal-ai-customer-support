import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for trying out QuickPal",
    features: [
      "500 messages/month",
      "1 chatbot",
      "Basic analytics",
      "Email support",
      "Community access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing businesses",
    features: [
      "10,000 messages/month",
      "5 chatbots",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: [
      "Unlimited messages",
      "Unlimited chatbots",
      "Custom AI training",
      "Dedicated account manager",
      "SLA guarantee",
      "SSO / SAML",
      "On-premise option",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background text-foreground">
      <div className="container-narrow">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’re finalizing our plans. Pricing will be available soon.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`
                relative rounded-2xl p-8 border 
                bg-card/80 backdrop-blur-xl
                ${plan.popular
                  ? "border-primary shadow-xl shadow-primary/10"
                  : "border-border"
                }
              `}
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
                Coming Soon
              </div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.04 + 0.3 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Button
                className="w-full cursor-not-allowed"
                variant="outline"
                disabled
              >
                Coming Soon
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;