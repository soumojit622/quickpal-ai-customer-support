import { motion } from "motion/react";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandWordpress,
  IconBrandSpotify,
  IconBrandWebflow,
  IconBrandSlack,
  IconApi,
  IconBrandZapier,
} from "@tabler/icons-react";

const integrations = [
  {
    icon: IconBrandJavascript,
    name: "HTML / JavaScript",
    description: "Single script tag embed",
  },
  {
    icon: IconBrandReact,
    name: "React / Next.js",
    description: "npm package & component",
  },
  {
    icon: IconBrandWordpress,
    name: "WordPress",
    description: "One-click plugin install",
  },
  {
    icon: IconBrandSpotify,
    name: "Spotify",
    description: "App store integration",
  },
  {
    icon: IconBrandWebflow,
    name: "Webflow",
    description: "Custom code embed",
  },
  {
    icon: IconBrandSlack,
    name: "Slack",
    description: "Internal support bot",
  },
  {
    icon: IconApi,
    name: "REST API",
    description: "Full API access",
  },
  {
    icon: IconBrandZapier,
    name: "Zapier",
    description: "1000+ app connections",
  },
];

const Integrations = () => {
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
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Integrations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Works Where You Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Embed QuickPal on any platform with our growing library of integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3"
              >
                <item.icon className="w-5 h-5 text-primary" stroke={1.6} />
              </motion.div>

              <p className="text-sm font-semibold text-foreground">
                {item.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;