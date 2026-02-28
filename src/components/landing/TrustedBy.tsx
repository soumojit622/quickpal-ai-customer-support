import { motion } from "motion/react";
import {
  IconBrandStripe,
  IconBrandSpotify,
  IconBrandNotion,
  IconBrandSlack,
  IconBrandVercel,
  IconBrandTabler,
} from "@tabler/icons-react";

const brands = [
  { name: "Stripe", Icon: IconBrandStripe },
  { name: "Spotify", Icon: IconBrandSpotify },
  { name: "Notion", Icon: IconBrandNotion },
  { name: "Slack", Icon: IconBrandSlack },
  { name: "Vercel", Icon: IconBrandVercel },
  { name: "Linear", Icon: IconBrandTabler }, // fallback (Tabler doesn't have official Linear icon)
];

const TrustedBy = () => {
  return (
    <section className="py-12 px-4 border-y border-border">
      <div className="container-narrow">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground mb-8"
        >
          Trusted by 2,000+ companies worldwide
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map(({ name, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-default"
            >
              <Icon className="w-5 h-5" stroke={1.6} />
              <span className="text-lg font-semibold tracking-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;