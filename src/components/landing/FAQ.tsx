import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to set up QuickPal?",
    a: "Most users are up and running in under 5 minutes. Simply sign up, paste your knowledge base URL or upload documents, copy the embed code, and you're live.",
  },
  {
    q: "Do I need coding skills to use QuickPal?",
    a: "Not at all. Our no-code dashboard lets you train, customize, and deploy your chatbot without writing a single line of code. We also offer developer APIs for advanced use cases.",
  },
  {
    q: "What languages does QuickPal support?",
    a: "QuickPal supports 50+ languages out of the box, including English, Spanish, French, German, Japanese, and more. It automatically detects the customer's language and responds accordingly.",
  },
  {
    q: "Can QuickPal escalate to a human agent?",
    a: "Yes. QuickPal detects when a query is too complex or when a customer requests a human. It seamlessly hands off the conversation with full context to your support team.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use end-to-end encryption, are SOC2 compliant, and GDPR ready. Your data is stored securely and never used to train third-party models.",
  },
  {
    q: "Can I customize the chatbot's appearance?",
    a: "Yes! You can customize colors, fonts, avatar, welcome messages, and position to match your brand perfectly. Pro and Enterprise plans offer full white-label options.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
