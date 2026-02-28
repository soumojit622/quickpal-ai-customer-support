"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import {
    IconBuildingStore,
    IconCheck,
    IconDatabase,
    IconDeviceFloppy,
    IconLoader,
    IconSettings,
} from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function DashboardClient({ ownerId }: { ownerId: string }) {
    const [businessName, setBusinessName] = useState("");
    const [supportEmail, setSupportEmail] = useState("");
    const [knowledge, setKnowledge] = useState("");
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSettings = async () => {
        setLoading(true);
        try {
            const result = await axios.post("/api/settings", {
                ownerId,
                businessName,
                supportEmail,
                knowledge,
            });
            console.log("Settings saved:");
            console.log(result);
            setLoading(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.error("Error saving settings:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (ownerId) {
            const handleGetDetails = async () => {
                try {
                    const result = await axios.post("/api/settings/get", {
                        ownerId,
                    });
                    setBusinessName(result.data.businessName);
                    setSupportEmail(result.data.supportEmail);
                    setKnowledge(result.data.knowledge);
                } catch (error) {
                    console.error("Error getting settings:", error);
                }
            };
            handleGetDetails()
        }
    }, [ownerId]);

    return (
        <div className="min-h-screen">
            {/* NAVBAR */}
            <motion.header
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="fixed top-0 left-0 w-full z-50"
            >
                <div className="backdrop-blur-xl bg-background/70 border-b border-border/50">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        {/* Brand */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group select-none"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-muted/40 border border-border/60 transition-all duration-300 group-hover:shadow-sm">
                                <Image
                                    src="/logo.svg"
                                    alt="QuickPal Logo"
                                    width={22}
                                    height={22}
                                    priority
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col leading-tight">
                                <div className="flex items-baseline">
                                    <span className="text-[18px] font-semibold tracking-[-0.02em] text-foreground">
                                        Quick
                                    </span>
                                    <span className="text-[18px] font-semibold tracking-[-0.02em] text-primary">
                                        Pal
                                    </span>
                                </div>

                                <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-medium">
                                    AI Customer Support Platform
                                </span>
                            </div>
                        </Link>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            <ModeToggle />

                            <Link href="/embed">
                                <Button variant="outline">
                                    Embed Chatbot
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* MAIN CONTENT */}
            <div className="relative flex justify-center px-6 py-20 mt-10">
                {/* Subtle background glow */}
                <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-3xl"
                >
                    {/* Header */}
                    <div className="pt-10 pb-8 border-b border-border/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                <IconSettings className="w-5 h-5" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold tracking-tight">
                                    Chatbot Settings
                                </h1>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Manage how your chatbot looks and responds to users.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="py-10 space-y-12">
                        {/* Business Details */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <IconBuildingStore className="w-5 h-5 text-muted-foreground" />
                                <div>
                                    <h2 className="text-lg font-semibold">Business Details</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Information visible to your customers.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Business Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your business name"
                                        className="w-full rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition mt-2"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Support Email</label>
                                    <input
                                        type="email"
                                        placeholder="support@yourcompany.com"
                                        className="w-full rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition mt-2"
                                        value={supportEmail}
                                        onChange={(e) => setSupportEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Divider */}
                        <div className="h-px bg-border/50" />

                        {/* Knowledge Base */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <IconDatabase className="w-5 h-5 text-muted-foreground" />
                                <div>
                                    <h2 className="text-lg font-semibold">Knowledge Base</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Add FAQs, policies, delivery info, and chatbot guidelines.
                                    </p>
                                </div>
                            </div>

                            <textarea
                                rows={13}
                                placeholder="Provide product details, service information, refund policies, delivery rules, or any guidelines the chatbot should follow."
                                className="w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                                value={knowledge}
                                onChange={(e) => setKnowledge(e.target.value)}
                            />
                        </section>

                        {/* Footer */}
                        <div className="pt-6 flex items-center gap-4">
                            <Button
                                onClick={handleSettings}
                                disabled={loading}
                                className="px-6 py-2.5 shadow-sm flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <IconLoader className="w-4 h-4 animate-spin" />
                                        <span>Saving changes</span>
                                    </>
                                ) : (
                                    <>
                                        <IconDeviceFloppy className="w-4 h-4" />
                                        <span>Save Changes</span>
                                    </>
                                )}
                            </Button>

                            {saved && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-green-800 bg-green-50 border border-green-200 shadow-sm rounded-lg"
                                >
                                    <IconCheck className="w-4 h-4 text-green-600" />
                                    <span>Settings Saved</span>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
