import { motion } from "motion/react";
import { Clock, CheckCircle, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Clock, value: "1.2s", label: "Avg. Response Time", description: "Lightning-fast AI replies" },
  { icon: CheckCircle, value: "80%", label: "Auto-Resolution Rate", description: "Issues solved without humans" },
  { icon: Users, value: "2M+", label: "Conversations Handled", description: "And counting every day" },
  { icon: TrendingUp, value: "4.9/5", label: "Customer Satisfaction", description: "Across all users" },
];

const Stats = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Numbers That Speak
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Real performance metrics from real businesses using QuickPal.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center p-6 rounded-xl border border-background/10"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <p className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</p>
              <p className="text-sm font-semibold mb-1">{stat.label}</p>
              <p className="text-xs opacity-60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
