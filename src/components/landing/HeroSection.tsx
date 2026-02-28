import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Send } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full relative bg-background">
      {/* Adaptive Glow Background */}
      <div
        className="
      absolute inset-0 z-0
      bg-[radial-gradient(125%_125%_at_50%_90%,white_40%,#14b8a6_100%)]
      dark:bg-[radial-gradient(125%_125%_at_50%_90%,#0f172a_40%,#0d9488_100%)]
    "
      />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full bg-primary/5 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-accent/50 blur-3xl"
          />
        </div>

        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-primary/20"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Now with GPT-4o Integration
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]"
              >
                AI Support That{" "}
                <span className="text-gradient">Never Sleeps</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                QuickPal is the AI chatbot anyone can embed. Resolve 80% of customer
                queries instantly — no support team needed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="text-base px-8 h-12 gap-2 shadow-lg shadow-primary/20">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-muted-foreground"
              >
                No credit card required · 14-day free trial · Setup in 2 minutes
              </motion.p>
            </div>

            {/* Right: Chat Preview */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="animate-float">
                <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
                  {/* Chat header */}
                  <div className="px-5 py-4 border-b border-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-bold">Q</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">QuickPal Assistant</p>
                      <p className="text-xs text-primary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Online now
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-5 space-y-4 min-h-70">
                    {[
                      { side: "bot", text: "Hi there! 👋 How can I help you today?" },
                      { side: "user", text: "How do I reset my password?" },
                      { side: "bot", text: <>Sure! Go to <span className="font-semibold text-accent-foreground">Settings → Security → Reset Password</span>. I can also send you a direct link. Would that help?</> },
                    ].map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.3, duration: 0.5 }}
                        className={`flex gap-3 ${msg.side === "user" ? "justify-end" : ""}`}
                      >
                        {msg.side === "bot" && (
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <span className="text-xs font-bold text-primary">Q</span>
                          </div>
                        )}
                        <div className={`rounded-2xl px-4 py-3 max-w-[80%] ${msg.side === "user"
                          ? "bg-primary rounded-tr-sm"
                          : "bg-accent rounded-tl-sm"
                          }`}>
                          <p className={`text-sm ${msg.side === "user" ? "text-primary-foreground" : "text-foreground"}`}>
                            {msg.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="px-4 py-3 border-t border-border flex items-center gap-2">
                    <input
                      className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                      placeholder="Type your message..."
                      readOnly
                    />
                    <button className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                      <Send className="w-4 h-4 text-primary-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
