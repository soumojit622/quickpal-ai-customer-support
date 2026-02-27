"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HomeClient() {
    return (
        <div className="min-h-screen overflow-x-hidden">
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

                            <Button
                                variant="outline"
                                className="text-sm font-medium"
                            >
                                Login
                            </Button>

                            <Button
                                className="px-5 shadow-sm hover:shadow-md transition-shadow"
                            >
                                Get Started
                            </Button>
                        </div>

                    </div>
                </div>
            </motion.header>
        </div>
    );
}