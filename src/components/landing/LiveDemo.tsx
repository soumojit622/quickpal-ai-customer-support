import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User } from "lucide-react";

const demoConversations = [
  { role: "bot" as const, text: "Welcome! I'm your QuickPal assistant. How can I help you today?" },
  { role: "user" as const, text: "What are your shipping options?" },
  { role: "bot" as const, text: "We offer 3 shipping options:\n\n🚀 **Express** — 1-2 business days ($12.99)\n📦 **Standard** — 3-5 business days ($5.99)\n🆓 **Free Shipping** — orders over $50\n\nWould you like to track an existing order?" },
  { role: "user" as const, text: "Yes, my order #4829" },
  { role: "bot" as const, text: "Order #4829 is currently **in transit** and estimated to arrive by **Feb 21**. I've also sent a tracking link to your email. Anything else?" },
];

const LiveDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState(1);

  const showNext = () => {
    if (visibleMessages < demoConversations.length) {
      setVisibleMessages((prev) => prev + 1);
    } else {
      setVisibleMessages(1);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Live Preview</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See QuickPal in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click through a real conversation flow to see how QuickPal handles queries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border bg-primary/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">QuickPal Demo</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs text-primary">Active</span>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-4 min-h-75 max-h-100 overflow-y-auto">
              <AnimatePresence mode="popLayout">
                {demoConversations.slice(0, visibleMessages).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
                  >
                    {msg.role === "bot" && (
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Bot className="w-3.5 h-3.5 text-primary" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-accent text-foreground rounded-tl-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.text}</p>
                    </div>
                    {msg.role === "user" && (
                      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1">
                        <User className="w-3.5 h-3.5 text-secondary-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="px-4 py-3 border-t border-border">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={showNext}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                {visibleMessages < demoConversations.length ? "Continue Conversation" : "Restart Demo"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDemo;
