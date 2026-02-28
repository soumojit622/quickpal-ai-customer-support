import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Support, TechFlow",
    text: "QuickPal reduced our ticket volume by 65% in the first month. Our team can finally focus on complex issues instead of repetitive questions.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder, ShopEasy",
    text: "Setup took literally 5 minutes. I copied one line of code, and suddenly my e-commerce store had 24/7 AI support. Game changer for a solo founder.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CTO, HealthBridge",
    text: "The natural language understanding is impressive. It handles medical terminology and patient queries with surprising accuracy and empathy.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Support Teams Everywhere
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsl(174 100% 29% / 0.1)" }}
              className="bg-card rounded-xl border border-border p-6 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
