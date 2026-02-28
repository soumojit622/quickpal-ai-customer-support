import { motion } from "motion/react";
import { Code, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Train Your Bot",
    description: "Upload your FAQs, knowledge base, or website URL. QuickPal learns your business in minutes.",
  },
  {
    icon: Code,
    step: "02",
    title: "Copy & Embed",
    description: "Grab your unique embed code — a single script tag — and paste it into your website or app.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live",
    description: "Your AI assistant is live and handling customer queries 24/7 with zero downtime.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding ">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Up and Running in 3 Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No engineering team? No problem. QuickPal is designed for anyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative"
              >
                <item.icon className="w-8 h-8 text-primary" />
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, type: "spring", stiffness: 400 }}
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center"
                >
                  {item.step}
                </motion.span>
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
