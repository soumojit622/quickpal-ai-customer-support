"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { IconLayoutDashboard, IconLogout } from "@tabler/icons-react";
import axios from "axios";
import { toast } from "sonner";

export default function HomeClient({ email }: { email: string | null }) {

    const [open, setOpen] = useState(false);

    const handleLogin = () => {
        toast.loading("Redirecting to login...", {
            description: "Taking you to the authentication page.",
        });

        window.location.href = "/api/auth/login";
    };

    const handleLogout = async () => {
        const loadingToast = toast.loading("Signing you out...");

        try {
            const result = await axios.get("/api/auth/logout");

            if (result.status === 200) {
                toast.success("Logged out successfully", {
                    id: loadingToast,
                    description: "You have been signed out of your account.",
                });

                setTimeout(() => {
                    window.location.href = "/";
                }, 800);
            } else {
                toast.error("Logout failed", {
                    id: loadingToast,
                    description: "Unexpected response from server.",
                });
            }
        } catch (error) {
            toast.error("Logout failed", {
                id: loadingToast,
                description: "Something went wrong. Please try again.",
            });

            console.error("Logout failed:", error);
        }
    };

    const firstLetter = email ? email.charAt(0).toUpperCase() : "U";

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [open]);





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

                            {email ? (<div className="relative" ref={popupRef}>
                                <Button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-medium"
                                    onClick={() => setOpen(!open)}
                                >
                                    {firstLetter}
                                </Button>
                                <AnimatePresence>
                                    {open && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                            transition={{ duration: 0.18, ease: "easeOut" }}
                                            className="absolute right-0 mt-3 w-52 
                 rounded-xl border border-border/50 
                 bg-background/95 backdrop-blur-xl 
                 shadow-xl p-2"
                                        >
                                            <div className="flex flex-col gap-1">

                                                {/* Dashboard */}
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                                                >
                                                    <IconLayoutDashboard className="w-4 h-4 " />
                                                    <span>Dashboard</span>
                                                </Button>

                                                <div className="h-px bg-border/50 my-1" />

                                                {/* Logout */}
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium 
                     text-red-500 hover:bg-red-500/10 hover:text-red-600"
                                                    onClick={handleLogout}
                                                >
                                                    <IconLogout className="w-4 h-4" />
                                                    <span>Logout</span>
                                                </Button>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>) : (<>
                                <Button
                                    variant="outline"
                                    className="text-sm font-medium"
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button><Button
                                    className="px-5 shadow-sm hover:shadow-md transition-shadow"
                                    onClick={handleLogin}
                                >
                                    Get Started
                                </Button>
                            </>)}
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* HERO */}

        </div>
    );
}