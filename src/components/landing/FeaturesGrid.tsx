import { motion } from "motion/react";
import {
  MessageSquare,
  Globe,
  Zap,
  Brain,
  BarChart3,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Natural Language AI",
    description: "Understands customer intent with advanced NLP. Handles typos, slang, and multi-language queries effortlessly.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Sub-second reply times, 24/7. No wait queues, no hold music — just instant, accurate answers.",
  },
  {
    icon: Globe,
    title: "Embed Anywhere",
    description: "Drop a single script tag into any website, app, or platform. Works with React, WordPress, Shopify & more.",
  },
  {
    icon: MessageSquare,
    title: "Smart Escalation",
    description: "Automatically detects complex issues and routes them to human agents with full conversation context.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track resolution rates, response times, satisfaction scores, and discover trending customer questions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2 compliant, end-to-end encryption, GDPR ready. Your customer data stays safe and private.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Delight Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI capabilities wrapped in a simple interface. No PhD required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsl(174 100% 29% / 0.12)" }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
