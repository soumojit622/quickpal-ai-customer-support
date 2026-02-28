import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  IconSparkles,
  IconBuilding,
  IconBook,
  IconShieldLock,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const footerLinks = {
  Product: {
    icon: IconSparkles,
    links: ["Features", "Pricing", "Integrations", "Changelog", "Documentation"],
  },
  Company: {
    icon: IconBuilding,
    links: ["About", "Blog", "Careers", "Press", "Partners"],
  },
  Resources: {
    icon: IconBook,
    links: ["Help Center", "API Docs", "Status", "Community", "Security"],
  },
  Legal: {
    icon: IconShieldLock,
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
};

const socials = [
  { name: "Twitter", icon: IconBrandTwitter },
  { name: "LinkedIn", icon: IconBrandLinkedin },
  { name: "GitHub", icon: IconBrandGithub },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20 pt-16 pb-8 px-4">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-muted border border-border/60 transition-all duration-300 group-hover:shadow-sm">
                <Image
                  src="/logo.svg"
                  alt="QuickPal Logo"
                  width={20}
                  height={20}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-lg font-semibold text-foreground">
                QuickPal
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered customer support anyone can embed. Built for speed,
              designed for delight.
            </p>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, data], i) => {
            const Icon = data.icon;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">
                    {category}
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {data.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QuickPal. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;